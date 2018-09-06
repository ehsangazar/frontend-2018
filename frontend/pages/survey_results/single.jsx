import React from 'react';
import Error from 'next/error';
import Survey from '../../models/Survey';
import { 
  H1,
  H2,
  H3,
  H4,
  UL,
  LI,
  A,
  Space
} from '../../components'

export default class Page extends React.Component {
  static async getInitialProps({ req, asPath }) {
    const SurveyModel = new Survey();
    const res = await SurveyModel.getItem(asPath.replace('/survey_results/',''));
    return {
      statusCode: res.statusCode,
      data: res.json,
    };
  }

  render() {
    const { statusCode, data } = this.props

    if (statusCode !== 200) {
      return <Error statusCode={this.props.statusCode} />;
    }
    
    return (
      <div>
        <A href={'/'}>
          {`<`} Go back
        </A>
        <H1>
          Survey Single
        </H1>
        {data &&
          <div>
            <H2>
              {data.name}
            </H2>
            <UL>
              <LI>
                name: {data.name}
              </LI>
              <LI>                      
                url: {data.url}
              </LI>
              <LI>
                participant_count: {data.participant_count}
              </LI>
              <LI>
                participant_count_percentage: {data.participant_count_percentage}%
              </LI>
              <LI>
                response_rate: {data.response_rate}
              </LI>
              <LI>
                submitted_response_count: {data.submitted_response_count}
              </LI>              
            </UL>
            <Space />
            <H3>
              Themes
            </H3>
            <UL>
              {data.themes && data.themes.map((theme,indexTheme) => 
                <LI key={`theme-${indexTheme}`}>
                  {theme.name}
                  <H4>
                    Questions:
                  </H4>
                  <UL>
                    {theme.questions && theme.questions.map((question,indexQuestion) => 
                      <LI key={`question-${indexQuestion}`}>
                        {question.description}
                        <br />
                        Average Rate: {question.average_rate}
                        <Space />
                      </LI>
                    )}
                  </UL>
                </LI>
              )}
            </UL>
          </div>
        }
      </div>
    );
  }
}

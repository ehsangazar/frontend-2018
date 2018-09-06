import React from 'react';
import Error from 'next/error';
import Survey from '../../models/Survey';
import { 
  UL,
  LI,
  A,
  H1,
  Space
} from '../../components'

export default class Page extends React.Component {
  static async getInitialProps({ req }) {
    const SurveyModel = new Survey();
    const res = await SurveyModel.getList();

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
        <H1>
          Survey List
        </H1>
        <UL>
          { data &&
            data.map((surveyItem, index) => 
              (
                <LI key={`surveyItem-${index}`}>
                  <div>
                    <A href={surveyItem.url}>
                      {surveyItem.name}
                    </A>
                    <UL>
                      <LI>
                        name: {surveyItem.name}
                      </LI>
                      <LI>                      
                        url: {surveyItem.url}
                      </LI>
                      <LI>
                        participant_count: {surveyItem.participant_count}
                      </LI>
                      <LI>
                        response_rate: {surveyItem.response_rate}
                      </LI>
                      <LI>
                        submitted_response_count: {surveyItem.submitted_response_count}
                      </LI>
                    </UL>
                    <Space />
                  </div>
                </LI>
              )
            )
          }
        </UL>
      </div>
    );
  }
}

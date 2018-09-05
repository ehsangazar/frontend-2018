import React from 'react';
import Link from 'next/link'  
import Error from 'next/error';
import Survey from '../../models/Survey';
import { 
  UL,
  LI,
  A,
  H1
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
          { data && data.survey_results &&
            data.survey_results.map((surveyItem, index) => 
              (
                <LI key={`surveyItem-${index}`}>
                  <Link href={surveyItem.url}>
                    <A>
                      {surveyItem.name}
                    </A>
                  </Link>
                </LI>
              )
            )
          }
        </UL>
      </div>
    );
  }
}

import React from 'react';
import Link from 'next/link'  
import Error from 'next/error';
import Survey from '../../models/Survey';
import { 
  UL
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
      <UL>
        { data && data.survey_results &&
          data.survey_results.map((surveyItem, index) => 
            (
              <li key={`surveyItem-${index}`}>
                <Link href={surveyItem.url}>
                  <a>
                    {surveyItem.name}
                  </a>
                </Link>
              </li>
            )
          )
        }
      </UL>
    );
  }
}

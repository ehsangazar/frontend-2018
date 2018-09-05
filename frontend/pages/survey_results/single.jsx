import React from 'react';
import Link from 'next/link'  
import Error from 'next/error';
import Survey from '../../models/Survey';
import { 
  H1
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
        <H1>
          Survey Single: {data.survey_result_detail.name}
        </H1>
      </div>
    );
  }
}

import React from 'react';
import Error from 'next/error';
import Survey from '../../models/Survey';

export default class Page extends React.Component {
  static async getInitialProps({ req }) {
    const SurveyModel = new Survey();
    const res = await SurveyModel.getList();

    return {
      statusCode: res.statusCode,
      data: res.data,
    };
  }

  render() {
    if (this.props.statusCode !== 200) {
      return <Error statusCode={this.props.statusCode} />;
    }

    return (
      <div>
        Survey List Page
      </div>
    );
  }
}

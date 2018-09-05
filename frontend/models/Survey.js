import fetch from 'isomorphic-unfetch';

class Survey {
  constructor() {
    this.fetch = fetch;
    this.baseUrl = `${process.env.ORIGIN}:${process.env.PORT}`
  }
  async getList() {
    const res = await this.fetch(`${this.baseUrl}/api/survey_results`);
    let json = {}
    if (res.status === 200) json = await res.json();
    return {
      statusCode: res.status,
      json
    };
  }

  async getItem(surveyId) {
    const res = await this.fetch(`${this.baseUrl}/api/survey_results/${surveyId}`);
    let json = {}
    if (res.status === 200) json = await res.json();
    return {
      statusCode: res.status,
      json
    };
  }
}


export default Survey;


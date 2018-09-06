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
    else return { statusCode: res.status }

    return {
      statusCode: res.status,
      json: json.survey_results
    };
  }

  async getItem(surveyId) {
    const res = await this.fetch(`${this.baseUrl}/api/survey_results/${surveyId}`);
    let json = {}
    
    if (res.status === 200) json = await res.json();
    else return { statusCode: res.status }
    
    json = json.survey_result_detail


    // calculating percentages
    json.participant_count_percentage = (json.response_rate * 100).toFixed(2)

    // calculating average rating for each quesiton
    // - Responses with an empty rating should be considered non-responses
    if (json.themes){
      json.themes.forEach(theme => {
        if (theme.questions) {
          theme.questions.forEach(question => {
            if (question.survey_responses){
              let countAcceptedResponses = 0
              let sumOfResponses = 0
              question.survey_responses.forEach(response => {
                if (response.response_content != "") {
                  countAcceptedResponses += 1
                  sumOfResponses += Number(response.response_content)
                }
              })
              if (countAcceptedResponses !== 0){
                question.average_rate = sumOfResponses / countAcceptedResponses
              } else {
                question.average_rate = 0
              }
            }
          })          
        }
      });
    }

    return {
      statusCode: res.status,
      json: json
    };
  }
}


export default Survey;


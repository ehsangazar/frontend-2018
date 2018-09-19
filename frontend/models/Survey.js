import 'isomorphic-unfetch';

class Survey {
  constructor() {
    this.baseUrl = `${process.env.ORIGIN}:${process.env.PORT}`
  }

  async getList() {
    const res = await fetch(`${this.baseUrl}/api/survey_results`);
    let json = {}

    if (res.status === 200) json = await res.json();
    else return { statusCode: res.status }

    return {
      statusCode: res.status,
      json: json.survey_results
    };
  }

  async getItem(surveyId) {
    const res = await fetch(`${this.baseUrl}/api/survey_results/${surveyId}`);
    let json = {}
    
    if (res.status === 200) json = await res.json();
    else return { statusCode: res.status }
    
    json = json.survey_result_detail


    // calculating percentages
    json.participant_count_percentage = (json.response_rate * 100).toFixed(2)

    // For on each themes and each questions and survey responses
    if (json.themes){
      json.themes.forEach(theme => {
        if (theme.questions) {
          theme.questions.forEach(question => {
            
            if (question.survey_responses){
              let countAcceptedResponses = 0
              let sumOfResponses = 0
              let countOfRatings = [0,0,0,0,0]
              let countOfEmptyRates = 0
              // calculating average rating for each quesiton
              // calculate counts of each rate
              // - Responses with an empty rating should be considered non-responses

              question.survey_responses.forEach(response => {
                if (response.response_content != "") {
                  countAcceptedResponses += 1
                  sumOfResponses += Number(response.response_content)

                  countOfRatings[Number(response.response_content)-1] += 1
                }else {
                  countOfEmptyRates += 1
                }
              })
              if (countAcceptedResponses !== 0){
                question.average_rate = sumOfResponses / countAcceptedResponses
              } else {
                question.average_rate = 0
              }

              question.count_of_ratings = countOfRatings
              question.count_of_empty_ratings = countOfEmptyRates
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


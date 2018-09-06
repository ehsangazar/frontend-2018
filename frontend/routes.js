const routes = () => {

  return [
    {
      regex: '/survey_results\/*',
      page: '/survey_results/single'
    },
    {
      regex: '\/',
      page: '/survey_results/list'
    }
    
  ]
}


module.exports = routes
angular.module('data', [])

  .factory('DataFactory', function($http, currentData){

    var getData = function(request){
      return $http({
        method: 'GET',
        url: 'api/topicData',
        params: request
      })
      .then(function(response){
        currentData.graphData = response.data.graphData;
        currentData.stories = response.data.stories;
        currentData.users = response.data.users;
      })
      .catch(function(error) {
        console.error(error);
      })
    }

    return {
      getData: getData
    }
  })

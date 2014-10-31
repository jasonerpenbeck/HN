angular.module('data', ['storedData']) //bug in the Global??
  .factory('DataFactory', function($http, CurrentData){

    var getData = function(request){
      return $http({
        method: 'GET',
        url: 'api/topicData',
        params: request
      })
      .then(function(response){
        CurrentData.graphData = response.data.graphData;
        CurrentData.stories = response.data.stories;
        CurrentData.users = response.data.users;
      })
      .catch(function(error) {
        console.error(error);
      })
    }

    return {
      getData: getData
    }
  })

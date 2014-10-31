angular.module('graph', []) //should I require the storedData Module here?
  .factory('GraphFactory', function($http, currentData){

    var getGraphData = function(request){
      return $http({
        method: 'GET',
        url: 'api/graph',
        params: request
      })
      .then(function(response){
        currentData.graph = response.data;
      })
      .catch(function(error) {
        console.error(error);
      })
    }

    return {
      getGraphData: getGraphData
    }
  })

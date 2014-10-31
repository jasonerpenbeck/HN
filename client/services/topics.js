angular.module('topics', [])
  .factory('TopicsFactory', function($http, currentData){

    var getTopicsList = function(request){
      return $http({
        method: 'GET',
        url: 'api/topics',
        params: request
      })
      .then(function(response){
        currentData.topics = response.data;
      })
    }
  })
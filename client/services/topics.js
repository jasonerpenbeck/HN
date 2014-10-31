angular.module('topics', [])
  .factory('TopicsFactory', function($http, currentData){

    var getTopicsList = function(request){
      return $http({
        method: 'GET',
        url: 'api/topicsList',
        params: request
      })
      .then(function(response){
        currentData.topics = response.data;
      })
      .catch(function(error) {
        console.error(error);
      })
    }

    var setCurrentTopic = function(request){
      //working on it
    }

    return {
      getTopicsList: getTopicsList
    }
  })

angular.module('stories', [])
  .factory('StoriesFactory', function($http, currentData){

    var getTopStories = function(request){
      return $http({
        method: 'GET',
        url: 'api/stories',
        params: request
      })
      .then(function(response){
        currentData.stories = response.data;
      })
      .catch(function(error) {
        console.error(error);
      })
    }

    return {
      getTopStories: getTopStories
    }
  })

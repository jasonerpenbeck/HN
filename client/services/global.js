angular.module('storedData', [])
  .factory('currentData', function(){

    return {
      currentTopic: null,
      topics: [],
      users: [],
      stories: []

    }
  })
angular.module('storedData', [])
  .factory('CurrentData', function(){

    return {
      currentTopic: null,
      topics: ['topic1', 'topic2', 'topic3'],
      users: ['user1', 'user2', 'user3'],
      stories: [{title: 'story1'}, {title: 'story2'}, {title: 'story3'}],
      graphData: ['someGraphData']

    }
  })

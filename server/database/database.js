var csv = require('csv-to-json');
var scoreData = require('./services/findPostsForWeek.js');
var userData = require('./services/findUsers.js');
var storyData = require('./services/findStories.js');

exports.findPostsForTopic = function(req,res){
  console.log('Req: ',req);
  var sendBack = {
    result: 'Request Received',
    data: {
      score: scoreData.findPostsforWeek(req),
      users: userData.findUsers(req),
      stories: storyData.findStories(req)
    }
  };

  res.json(sendback);
};


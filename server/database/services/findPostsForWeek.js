var queryContainer = require('../queries/queryContainer.js').topicQueries;
var csv = require('csv-to-json');

exports.findPostsForWeek = function(req) {
  var dirPath = __dirname.split('/services');

  var query = req.query.topic;
  console.log(dirPath);
  console.log(queryContainer);

  var json = csv.parse(dirPath[0]+''+queryContainer[query]);
  return json;
};
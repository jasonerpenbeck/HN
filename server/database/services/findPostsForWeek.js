var queryContainer = require('../queries/queryContainer.js').topicQueries;
var csv = require('csv-to-json');

exports.findPostsForWeek = function(req) {
  var dirPath = __dirname.split('/services');
  console.log(dirPath);
  // console.log(y);
  // console.log(x.slice(y));
  // console.log(x);

  var query = req.query.topic;
  
  // console.log(queryContainer);
  // console.log(queryContainer[query]);
  console.log(dirPath+""+queryContainer[query]);

  var json = csv.parse(dirPath[0]+''+queryContainer[query]);
  console.dir(json);
  return {
    result:'Request received',
    data: 'ok'
  };
};
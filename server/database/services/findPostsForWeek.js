var queryContainer = require('../queries/queryContainer.js').topicQueries;
var csv = require('csv-to-json');

exports.findPostsForWeek = function(req) {
  var x = __dirname;
  var y = __dirname.lastIndexOf('/');
  console.log(x.slice(y));
  console.log(x);

  var query = req.query.param;
  // console.log(queryContainer);
  // console.log(queryContainer[query]);
  console.log(__dirname+""+queryContainer[query]);
  var json = csv.parse(__dirname+""+queryContainer[query]);
  console.dir(json);
  return {
    result:'Request received',
    data: 'ok'
  };
};
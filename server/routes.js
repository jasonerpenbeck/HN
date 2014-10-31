var db = require('./database/database.js');
var wc = require('./database/wordCloud/frameworks.js');

exports.dbRouter = function(app) {
  app.get('/findTopic', db.findPostsForTopic);
};

exports.wcRouter = function(app) {
  app.get('/getWordCloud', wc.wcFrameworks);
};
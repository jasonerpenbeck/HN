var db = require('./database/database.js');
var wc = require('./database/wordCloud/frameworks.js');

module.exports = function(router) {
  router.get('/findTopic', db.findPostsForTopic);
  router.get('/wordcloud', wc.wcFrameworks);
};
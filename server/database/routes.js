var db = require('./database.js');

exports.dbRouter = function(app) {

  app.get('/findTopic', db.findPostsForTopic);
};
var db = require('./database/database');

exports.dbRouter = function(app) {

  app.get('/findTopic', db.findPostsForTopic);
};
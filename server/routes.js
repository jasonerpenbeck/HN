var db = require('./database/database.js');

exports.dbRouter = function(app) {

  app.get('/findTopic', db.findPostsForTopic);
};
var db = require('./database');

exports.dbRouter = function(app) {

  app.get('/findPostsForWeek', db.findPostsForWeek);
};
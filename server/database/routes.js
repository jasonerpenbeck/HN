var db = require('./services/findPostsForWeek');

exports.dbRouter = function(app) {

  app.get('/findPostsForWeek', db.findPostsForWeek);
};
var db = require('./services/findPostsForWeek.js');

exports.dbRouter = function(app) {

  app.get('/findPostsForWeek', db.findPostsForWeek);
};
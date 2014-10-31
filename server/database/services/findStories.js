var csv = require('csv-to-json');
var fs = require('fs'),
    path = require('path');

exports.findStories = function(str) {
  // create absolute path for csv-to-json module
  var dirString = path.dirname(fs.realpathSync(__filename));
  var absolutePath = dirString.split('HN');

  return {
    day: csv.parse(absolutePath[0]+'/HN/server/database/queries/top20/top20_stories_1d_'+str+'.csv'),
    week: csv.parse(absolutePath[0]+'/HN/server/database/queries/top20/top20_stories_1w_'+str+'.csv'),
    month: csv.parse(absolutePath[0]+'/HN/server/database/queries/top20/top20_stories_1m_'+str+'.csv'),
    year: csv.parse(absolutePath[0]+'/HN/server/database/queries/top20/top20_stories_1y_'+str+'.csv')
  };
};

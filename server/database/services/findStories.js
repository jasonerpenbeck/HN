var csv = require('csv-to-json');
var fs = require('fs'),
    path = require('path');

exports.findStories = function(str) {
  // create absolute path for csv-to-json module
  str = str.toLowerCase();

  return {
    day: csv.parse(__dirname + '/../queries/top20/top20_stories_1d_'+str+'.csv'),
    week: csv.parse(__dirname + '/../queries/top20/top20_stories_1w_'+str+'.csv'),
    month: csv.parse(__dirname + '/../queries/top20/top20_stories_1m_'+str+'.csv'),
    year: csv.parse(__dirname + '/../queries/top20/top20_stories_1y_'+str+'.csv')
  };
};

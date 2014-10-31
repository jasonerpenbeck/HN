var findStories = function(req) {
  return {
    day: csv.parse('./database/queries/top20/top20_stories_1d_',+req+'.csv'),
    week: csv.parse('./database/queries/top20/top20_stories_1w_',+req+'.csv'),
    month: csv.parse('./database/queries/top20/top20_stories_1m_',+req+'.csv'),
    year: csv.parse('./database/queries/top20/top20_stories_1y_',+req+'.csv')
  };
};

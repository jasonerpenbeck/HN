exports.findUsers = function(req) {
  return {
    day: csv.parse('./database/queries/top20/top20_users_1d_',+req+'.csv'),
    week: csv.parse('./database/queries/top20/top20_users_1w_',+req+'.csv'),
    month: csv.parse('./database/queries/top20/top20_users_1m_',+req+'.csv'),
    year: csv.parse('./database/queries/top20/top20_users_1y_',+req+'.csv')
  };
};
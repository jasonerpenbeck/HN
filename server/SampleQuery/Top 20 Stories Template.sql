SELECT * from stories WHERE TITLE LIKE = '%Heroku%' ORDER BY SCORE DESC LIMIT 20;


SELECT `by`, TopicScore, UserStories
	FROM (SELECT `by`, sum(`score`) AS 'TopicScore', count(`by`) AS 'UserStories'
		FROM stories
		WHERE Title LIKE '%angular%'
		AND time < unix_timestamp(NOW()) AND time > unix_timestamp(DATE_SUB(NOW(), INTERVAL 1 MONTH)
		GROUP BY `by`) as table1
	ORDER BY TopicScore DESC
	LIMIT 20;

// last hour
// 3600
// last day
// 86400
// last week
// 604800
// last month
// 2592000
// last year
// 31104000
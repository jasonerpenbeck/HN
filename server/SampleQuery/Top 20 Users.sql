SELECT `by`, TopicScore, UserStories
	FROM (SELECT `by`, sum(`score`) AS 'TopicScore', count(`by`) AS 'UserStories'
			FROM stories 
			WHERE Title LIKE '%angular%' 
			GROUP BY `by`) as table1
	ORDER BY TopicScore DESC
	LIMIT 20;			

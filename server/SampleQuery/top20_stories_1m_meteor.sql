-- top 20 stories on a topic in the last month
-- topic = string match in title
SELECT * 
	FROM stories 
	WHERE title LIKE '%meteor%' 
	AND time BETWEEN unix_timestamp(NOW()) - 2592000 AND unix_timestamp(NOW()) 
	ORDER BY score DESC, time DESC 
	LIMIT 20;
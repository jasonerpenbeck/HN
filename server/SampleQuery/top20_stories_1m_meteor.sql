-- top 20 stories on a topic in the last month
-- topic = string match in title
<<<<<<< HEAD

-- last day
-- 86400
-- last week
-- 604800
-- last month
-- 2592000
-- last year
-- 31104000

SELECT * 
	FROM stories 
	WHERE title LIKE '%jquery%' 
	AND time BETWEEN (1413150888 - 86400) AND 1413150888 
=======
SELECT * 
	FROM stories 
	WHERE title LIKE '%meteor%' 
	AND time BETWEEN unix_timestamp(NOW()) - 2592000 AND unix_timestamp(NOW()) 
>>>>>>> d7ed908e9cd8c959217135e3583a67e77ebc1d17
	ORDER BY score DESC, time DESC 
	LIMIT 20;
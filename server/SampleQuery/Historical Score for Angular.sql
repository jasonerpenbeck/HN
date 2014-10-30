-- don't need to select HumanDate, but here's the syntax from_unixtime(time) AS HumanDate,
SELECT sum(score) AS TotalScore, YEAR(from_unixtime(time)) AS YearValue, WEEK(from_unixtime(time)) AS WeekValue
	FROM stories
	WHERE Title LIKE '%angular%'
	GROUP BY YearValue, WeekValue
	ORDER BY YearValue, WeekValue
	LIMIT 500;
-- HAVING can be used as a where clause once the data is grouped
-- ex. HAVING TotalScore > 50

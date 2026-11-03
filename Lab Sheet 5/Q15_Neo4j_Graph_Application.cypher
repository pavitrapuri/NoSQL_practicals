// Q15. Small graph database application - CRUD and relationship queries
// CREATE
CREATE (s:Student {id:1,name:'Aarav'}),
       (c:Course {id:101,name:'NoSQL'}),
       (s)-[:ENROLLED_IN]->(c);

// READ
MATCH (s:Student)-[:ENROLLED_IN]->(c:Course)
RETURN s.name,c.name;

// UPDATE
MATCH (s:Student {id:1})
SET s.name='Aarav Sharma'
RETURN s;

// DELETE relationship
MATCH (:Student {id:1})-[r:ENROLLED_IN]->(:Course {id:101})
DELETE r;

// DELETE nodes after relationship is removed
MATCH (s:Student {id:1}) DETACH DELETE s;
MATCH (c:Course {id:101}) DETACH DELETE c;

// Graph databases are useful for social networks, recommendations,
// fraud detection and knowledge graphs because they query relationships directly.

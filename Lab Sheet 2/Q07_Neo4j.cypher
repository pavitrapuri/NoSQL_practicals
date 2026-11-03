CREATE
(s1:Student {id:1,name:'Aarav'}),(s2:Student {id:2,name:'Riya'}),
(s3:Student {id:3,name:'Karan'}),(s4:Student {id:4,name:'Neha'}),
(s5:Student {id:5,name:'Arjun'}),
(c1:Course {name:'BCA'}),(c2:Course {name:'BBA'}),(c3:Course {name:'BTech'}),
(s1)-[:ENROLLED_IN]->(c1),(s2)-[:ENROLLED_IN]->(c1),
(s3)-[:ENROLLED_IN]->(c2),(s4)-[:ENROLLED_IN]->(c1),(s5)-[:ENROLLED_IN]->(c3);
MATCH (s:Student) RETURN s;
MATCH (s:Student)-[:ENROLLED_IN]->(c:Course {name:'BCA'}) RETURN s.name;
MATCH (:Student {name:'Aarav'})-[:ENROLLED_IN]->(c:Course) RETURN c.name;
MATCH (s:Student {name:'Karan'}),(c:Course {name:'BCA'}) CREATE (s)-[:ENROLLED_IN]->(c);
MATCH (:Student {name:'Karan'})-[r:ENROLLED_IN]->(:Course {name:'BCA'}) DELETE r;

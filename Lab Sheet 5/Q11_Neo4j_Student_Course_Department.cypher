// Q11. Student-Course-Department graph
CREATE
(s1:Student {id:1,name:'Aarav'}),
(s2:Student {id:2,name:'Riya'}),
(c1:Course {name:'BCA'}),
(c2:Course {name:'BBA'}),
(d1:Department {name:'Computer Applications'}),
(d2:Department {name:'Management'}),
(s1)-[:ENROLLED_IN]->(c1),
(s2)-[:ENROLLED_IN]->(c1),
(s1)-[:BELONGS_TO]->(d1),
(s2)-[:BELONGS_TO]->(d1),
(c2)-[:OFFERED_BY]->(d2);

MATCH (n) RETURN n;
MATCH (s:Student)-[r:ENROLLED_IN]->(c:Course) RETURN s,r,c;

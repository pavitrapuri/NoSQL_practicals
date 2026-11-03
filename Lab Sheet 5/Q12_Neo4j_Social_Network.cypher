// Q12. Social network with friends, followers and workplace
CREATE
(p1:Person {name:'Aarav'}),
(p2:Person {name:'Riya'}),
(p3:Person {name:'Karan'}),
(p4:Person {name:'Neha'}),
(p1)-[:FRIENDS_WITH]->(p2),
(p2)-[:FOLLOWS]->(p3),
(p3)-[:FOLLOWS]->(p1),
(p1)-[:WORKS_AT]->(:Company {name:'ABC Tech'}),
(p2)-[:WORKS_AT]->(:Company {name:'ABC Tech'});

MATCH (p:Person {name:'Aarav'})-[:FRIENDS_WITH]-(friend:Person)
RETURN friend.name;
MATCH (follower:Person)-[:FOLLOWS]->(p:Person {name:'Aarav'})
RETURN follower.name;

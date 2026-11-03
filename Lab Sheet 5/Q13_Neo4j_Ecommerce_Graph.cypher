// Q13. Shopping / e-commerce graph
CREATE
(c:Customer {id:1,name:'Aarav'}),
(p1:Product {id:101,name:'Laptop'}),
(p2:Product {id:102,name:'Mouse'}),
(cat:Category {name:'Electronics'}),
(o:Order {id:5001,status:'Delivered'}),
(c)-[:PLACED]->(o),
(o)-[:CONTAINS]->(p1),
(o)-[:CONTAINS]->(p2),
(p1)-[:IN_CATEGORY]->(cat),
(p2)-[:IN_CATEGORY]->(cat);

MATCH (c:Customer {name:'Aarav'})-[:PLACED]->(:Order)-[:CONTAINS]->(p:Product)
RETURN DISTINCT p.name;

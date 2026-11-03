// Q14. Neo4j transactions and consistency
// Execute each statement in Neo4j Browser.
// CREATE
CREATE (:Person {name:'Aarav',age:20});
 // MATCH
MATCH (p:Person) RETURN p;
 // SET
MATCH (p:Person {name:'Aarav'}) SET p.age=21 RETURN p;
 // DELETE
MATCH (p:Person {name:'Aarav'}) DETACH DELETE p;
// Neo4j transactions group graph changes so they commit together or roll back.
// Neo4j Browser executes each submitted statement as a transaction by default.
// For explicit transaction blocks, use a driver session transaction API.

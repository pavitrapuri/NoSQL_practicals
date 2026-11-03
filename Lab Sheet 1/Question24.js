// Q24. MongoDB CRUD compared with SQL
/*
Operation | MongoDB command                         | SQL equivalent
CREATE    | db.Students.insertOne({...})             | INSERT INTO Students (...) VALUES (...)
READ      | db.Students.find({RollNumber: 101})      | SELECT * FROM Students WHERE RollNumber=101
UPDATE    | db.Students.updateOne({RollNumber:101},  | UPDATE Students SET Department='BCA'
            {$set:{Department:"BCA"}})               | WHERE RollNumber=101
DELETE    | db.Students.deleteOne({RollNumber:101})  | DELETE FROM Students WHERE RollNumber=101

Difference:
1. MongoDB stores records as BSON documents in collections.
2. SQL databases generally store records in rows and tables.
3. MongoDB uses flexible document structures; SQL commonly uses a fixed schema.
4. MongoDB query methods use JSON-like objects; SQL uses SQL statements.
*/

// Q1. Create StudentDB and verify its creation in MongoDB Shell
db = db.getSiblingDB("StudentDB");
db.Setup.insertOne({message: "StudentDB created successfully"})
show dbs

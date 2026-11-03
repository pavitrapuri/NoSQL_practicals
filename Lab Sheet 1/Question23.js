// Q23. Manage databases and collections using Shell and Compass
// MongoDB Shell examples:
db = db.getSiblingDB("StudentDB");
show dbs
show collections
db.createCollection("Demo")
db.Demo.insertOne({name: "Sample"})
db.Demo.find()
db.Demo.drop()
// In Compass, connect to the same MongoDB server and perform the same
// database/collection creation, document insertion, viewing and deletion
// through the graphical interface.

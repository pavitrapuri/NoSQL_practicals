// Q13. Remove Email field from all student documents
db = db.getSiblingDB("StudentDB");
db.Students.updateMany(
  {},
  {$unset: {Email: ""}}
)
db.Students.find()

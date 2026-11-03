// Q12. Add Email field to all student documents
db = db.getSiblingDB("StudentDB");
db.Students.updateMany(
  {},
  {$set: {Email: "student@example.com"}}
)
db.Students.find()

// Q17. Rename Students collection to StudentDetails
db = db.getSiblingDB("StudentDB");
db.Students.renameCollection("StudentDetails")
show collections
db.StudentDetails.find()

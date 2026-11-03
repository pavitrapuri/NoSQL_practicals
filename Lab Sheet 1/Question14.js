// Q14. Delete one student using Roll Number
db = db.getSiblingDB("StudentDB");
db.Students.deleteOne({RollNumber: 105})
db.Students.find()

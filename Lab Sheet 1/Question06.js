// Q6. Retrieve a student by Roll Number
db = db.getSiblingDB("StudentDB");
db.Students.find({RollNumber: 101})

// Q15. Delete multiple students who satisfy a condition
db = db.getSiblingDB("StudentDB");
db.Students.deleteMany({CGPA: {$lt: 8.0}})
db.Students.find()

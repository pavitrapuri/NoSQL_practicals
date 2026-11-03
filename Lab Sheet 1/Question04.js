// Q4. Insert multiple student documents
db = db.getSiblingDB("StudentDB");
db.Students.insertMany([
  {RollNumber: 102, Name: "Riya", Department: "BCA", Semester: 5, CGPA: 8.2},
  {RollNumber: 103, Name: "Karan", Department: "BBA", Semester: 3, CGPA: 7.9},
  {RollNumber: 104, Name: "Neha", Department: "BCA", Semester: 5, CGPA: 9.1},
  {RollNumber: 105, Name: "Arjun", Department: "BTech", Semester: 3, CGPA: 8.0}
])
db.Students.find()

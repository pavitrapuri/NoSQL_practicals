// Q3. Insert a single student document
db = db.getSiblingDB("StudentDB");
db.Students.insertOne({
  RollNumber: 101,
  Name: "Aarav",
  Department: "BCA",
  Semester: 5,
  CGPA: 8.5
})
db.Students.find()

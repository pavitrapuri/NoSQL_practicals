// Q11. Replace one student document using replaceOne()
db = db.getSiblingDB("StudentDB");
db.Students.replaceOne(
  {RollNumber: 102},
  {RollNumber: 102, Name: "Riya Sharma", Department: "BCA", Semester: 6, CGPA: 8.6}
)
db.Students.find({RollNumber: 102})

// Q10. Update semester for all students in a department using updateMany()
db = db.getSiblingDB("StudentDB");
db.Students.updateMany(
  {Department: "BCA"},
  {$set: {Semester: 6}}
)
db.Students.find({Department: "BCA"})

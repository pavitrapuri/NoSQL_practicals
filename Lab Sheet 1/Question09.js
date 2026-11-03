// Q9. Update department of one student using updateOne()
db = db.getSiblingDB("StudentDB");
db.Students.updateOne(
  {RollNumber: 101},
  {$set: {Department: "BTech"}}
)
db.Students.find({RollNumber: 101})

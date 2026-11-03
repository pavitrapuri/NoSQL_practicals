// Q21. Recreate StudentDB and insert sample data after deletion
db = db.getSiblingDB("StudentDB");
db.Students.insertMany([
  {RollNumber: 201, Name: "Aman", Department: "BCA", Semester: 1, CGPA: 8.1},
  {RollNumber: 202, Name: "Simran", Department: "BBA", Semester: 1, CGPA: 8.7}
])
show dbs
show collections
db.Students.find()

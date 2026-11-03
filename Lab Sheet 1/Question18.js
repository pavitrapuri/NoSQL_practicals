// Q18. Create Departments collection and insert sample data
db = db.getSiblingDB("StudentDB");
db.createCollection("Departments")
db.Departments.insertMany([
  {DepartmentID: 1, DepartmentName: "Computer Applications", HOD: "Dr. Mehta"},
  {DepartmentID: 2, DepartmentName: "Management", HOD: "Dr. Sharma"}
])
db.Departments.find()

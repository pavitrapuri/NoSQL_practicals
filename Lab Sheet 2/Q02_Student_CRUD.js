// Run in mongosh
db=db.getSiblingDB("CollegeDB");
db.Students.insertMany([
{Student_ID:1,Name:"Aarav",Course:"BCA",Semester:5,Marks:85},
{Student_ID:2,Name:"Riya",Course:"BCA",Semester:5,Marks:91},
{Student_ID:3,Name:"Karan",Course:"BBA",Semester:3,Marks:78},
{Student_ID:4,Name:"Neha",Course:"BCA",Semester:4,Marks:88},
{Student_ID:5,Name:"Arjun",Course:"BTech",Semester:3,Marks:82}
]);
db.Students.find();                                      // Display all
db.Students.find({Course:"BCA"});                       // Particular course
db.Students.updateOne({Student_ID:1},{$set:{Marks:90}});// Update marks
db.Students.deleteOne({Student_ID:5});                  // Delete one
db.Students.countDocuments({});                         // Count

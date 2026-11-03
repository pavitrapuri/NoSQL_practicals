// Q7. Retrieve students of a particular department
db = db.getSiblingDB("StudentDB");
db.Students.find({Department: "BCA"})

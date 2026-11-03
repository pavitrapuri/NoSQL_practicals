// Q8. Display only Name and Department using projection
db = db.getSiblingDB("StudentDB");
db.Students.find({}, {_id: 0, Name: 1, Department: 1})

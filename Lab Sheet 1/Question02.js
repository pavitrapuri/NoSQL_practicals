// Q2. Create Students, Faculty and Courses collections
db = db.getSiblingDB("StudentDB");
db.createCollection("Students")
db.createCollection("Faculty")
db.createCollection("Courses")
show collections

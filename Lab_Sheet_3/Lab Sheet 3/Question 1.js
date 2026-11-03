use studentActivityDB;

db.students.insertMany([
  { studentId: 1, name: "Aman", courses: ["DBMS", "Python"], attendance: 85, skills: ["C", "Java"], activities: ["Quiz", "Workshop"] },
  { studentId: 2, name: "Riya", courses: ["MongoDB", "Python"], attendance: 92, skills: ["HTML", "MongoDB"], activities: ["Project", "Quiz"] },
  { studentId: 3, name: "Karan", courses: ["DBMS"], attendance: 60, skills: ["C"], activities: ["Seminar"] }
]);

db.students.find({ attendance: { $gte: 75 } });
db.students.find({ courses: "Python" });
db.students.find({ skills: "MongoDB" });
db.students.find({ activities: "Project" });
db.students.find({ attendance: { $lt: 75 } });

// Q1. Student Activity Tracking System
const { withDb, show } = require("../lib/db");

withDb(async (db) => {
  const students = db.collection("studentActivities");
  await students.deleteMany({});
  await students.insertMany([
    {
      studentId: "S101", name: "Aarav", courses: ["BCA", "DBMS"],
      attendance: 92, skills: ["JavaScript", "MongoDB"],
      activities: [{ name: "Quiz", date: new Date("2026-10-10"), score: 85 },
                   { name: "Project", date: new Date("2026-10-20"), score: 90 }]
    },
    {
      studentId: "S102", name: "Riya", courses: ["BCA", "Python"],
      attendance: 68, skills: ["Python", "HTML"],
      activities: [{ name: "Quiz", date: new Date("2026-10-12"), score: 72 }]
    },
    {
      studentId: "S103", name: "Kabir", courses: ["BCA", "DBMS"],
      attendance: 80, skills: ["MongoDB", "C"],
      activities: [{ name: "Project", date: new Date("2026-10-22"), score: 88 }]
    }
  ]);

  show("Students with attendance above 75%", await students.find({ attendance: { $gt: 75 } }).toArray());
  show("Students enrolled in DBMS", await students.find({ courses: "DBMS" }).toArray());
  show("Students having MongoDB skill", await students.find({ skills: "MongoDB" }).toArray());
  show("Students with a Project activity", await students.find({ "activities.name": "Project" }).toArray());
});

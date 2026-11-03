// Q13. Course Learning Platform
const { withDb, show } = require("../lib/db");

withDb(async (db) => {
  const courses = db.collection("learningCourses");
  await courses.deleteMany({});
  await courses.insertMany([
    {
      courseId: "C101", title: "MongoDB Basics", instructor: "Ms. Sharma",
      modules: [{ name: "Introduction", lessons: 4 }, { name: "Queries", lessons: 6 }],
      students: [
        { studentId: "S1", name: "Aarav", progress: 100, completed: true },
        { studentId: "S2", name: "Riya", progress: 60, completed: false }
      ]
    },
    {
      courseId: "C102", title: "JavaScript", instructor: "Mr. Verma",
      modules: [{ name: "Basics", lessons: 5 }],
      students: [{ studentId: "S3", name: "Kabir", progress: 40, completed: false }]
    }
  ]);

  show("Students with progress of at least 50%", await courses.aggregate([
    { $unwind: "$students" },
    { $match: { "students.progress": { $gte: 50 } } },
    { $project: { _id: 0, course: "$title", student: "$students.name", progress: "$students.progress", completed: "$students.completed" } }
  ]).toArray());
  show("Completed students", await courses.aggregate([
    { $unwind: "$students" },
    { $match: { "students.completed": true } },
    { $project: { _id: 0, course: "$title", student: "$students.name" } }
  ]).toArray());
});

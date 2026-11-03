use courseLearningDB;

db.courses.insertMany([
  { courseId: 101, title: "MongoDB", instructor: "Mr. Sharma", modules: ["Introduction", "CRUD", "Aggregation"] },
  { courseId: 102, title: "Python", instructor: "Ms. Verma", modules: ["Basics", "Functions"] }
]);

db.enrollments.insertMany([
  { student: "Aman", courseId: 101, progress: 80, completed: false },
  { student: "Riya", courseId: 101, progress: 100, completed: true },
  { student: "Karan", courseId: 102, progress: 40, completed: false }
]);

db.enrollments.find({ courseId: 101, progress: { $gte: 50 } });
db.enrollments.find({ completed: true });
db.enrollments.find({ progress: { $lt: 50 } });

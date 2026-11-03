// Q3. Mini Blogging Platform
const { withDb, show } = require("../lib/db");

withDb(async (db) => {
  const blogs = db.collection("blogs");
  await blogs.deleteMany({});
  await blogs.insertMany([
    { title: "Learning MongoDB", author: "Aarav", category: "Technology", tags: ["mongodb", "database"], comments: [{ by: "Riya", text: "Helpful!" }], published: true },
    { title: "Healthy Study Habits", author: "Riya", category: "Education", tags: ["study", "productivity"], comments: [], published: true },
    { title: "JavaScript Basics", author: "Kabir", category: "Technology", tags: ["javascript", "programming"], comments: [{ by: "Aarav", text: "Nice post" }], published: false },
    { title: "Database Design", author: "Aarav", category: "Education", tags: ["mongodb", "database"], comments: [], published: true }
  ]);

  show("Blogs tagged mongodb", await blogs.find({ tags: "mongodb" }).toArray());
  show("Technology blogs with javascript tag", await blogs.find({ category: "Technology", tags: "javascript" }).toArray());
  show("Blogs with both mongodb and database tags", await blogs.find({ tags: { $all: ["mongodb", "database"] } }).toArray());
});

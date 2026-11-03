use miniBlogDB;

db.blogs.insertMany([
  { title: "MongoDB Basics", author: "Aman", category: "Technology", tags: ["mongodb", "database"], comments: ["Good post"], published: true },
  { title: "Healthy Life", author: "Riya", category: "Lifestyle", tags: ["health", "fitness"], comments: ["Useful"], published: true },
  { title: "Database Design", author: "Karan", category: "Technology", tags: ["mongodb", "design"], comments: [], published: false }
]);

db.blogs.find({ tags: "mongodb" });
db.blogs.find({ category: "Technology", tags: "design" });
db.blogs.find({ tags: { $all: ["mongodb", "database"] } });
db.blogs.find({ category: "Lifestyle", published: true });

use contentManagementDB;

db.articles.insertMany([
  { title: "MongoDB Guide", author: "Aman", category: "Technology", tags: ["database"], status: "published", publishDate: new Date() },
  { title: "Web Design", author: "Riya", category: "Technology", tags: ["web", "design"], status: "draft" },
  { title: "Healthy Food", author: "Karan", category: "Lifestyle", tags: ["food"], status: "published", publishDate: new Date() }
]);

db.articles.find({ status: "published" });
db.articles.find({ status: "draft" });
db.articles.find({ category: "Technology", status: "published" });
db.articles.find({ author: "Riya", status: "draft" });

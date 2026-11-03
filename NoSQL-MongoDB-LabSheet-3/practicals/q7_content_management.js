// Q7. Content Management System
const { withDb, show } = require("../lib/db");

withDb(async (db) => {
  const articles = db.collection("articles");
  await articles.deleteMany({});
  await articles.insertMany([
    { title: "MongoDB Guide", author: "Aarav", category: "Technology", tags: ["database"], status: "published", publishedAt: new Date() },
    { title: "Draft: Cloud Basics", author: "Riya", category: "Technology", tags: ["cloud"], status: "draft" },
    { title: "Study Tips", author: "Kabir", category: "Education", tags: ["study"], status: "published", publishedAt: new Date() },
    { title: "Pending Review", author: "Riya", category: "Education", tags: ["college"], status: "review" }
  ]);

  show("Published articles", await articles.find({ status: "published" }).toArray());
  show("Unpublished articles", await articles.find({ status: { $ne: "published" } }).toArray());
  show("Technology articles by Riya", await articles.find({ category: "Technology", author: "Riya" }).toArray());
  show("Published articles with database tag", await articles.find({ status: "published", tags: "database" }).toArray());
});

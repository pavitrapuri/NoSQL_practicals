use flexibleNewsDB;

db.news.insertMany([
  { title: "Technology Update", author: "Aman", location: "Delhi", category: "Technology", tags: ["AI", "Tech"], source: "News One", image: "tech.jpg" },
  { title: "City News", author: "Riya", location: "Haridwar", category: "Local", tags: ["City"], source: "News Two" },
  { title: "Sports Update", author: "Karan", category: "Sports", tags: ["Cricket"], source: "News Three", image: "sports.jpg", views: 1200 }
]);

db.news.find({ category: "Technology" });
db.news.find({ location: "Haridwar" });
db.news.find({ tags: "Cricket" });
db.news.find({ author: "Aman", category: "Technology" });
db.news.find({ image: { $exists: true } });

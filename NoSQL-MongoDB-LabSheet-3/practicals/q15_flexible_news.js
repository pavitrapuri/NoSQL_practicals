// Q15. Flexible News Database (documents with different structures)
const { withDb, show } = require("../lib/db");

withDb(async (db) => {
  const news = db.collection("newsArticles");
  await news.deleteMany({});
  await news.insertMany([
    {
      title: "New Technology Hub Opens",
      author: "A. Mehta",
      location: "Delhi",
      category: "Technology",
      tags: ["technology", "startup"],
      image: "tech-hub.jpg",
      source: "Daily News",
      published: true
    },
    {
      title: "Heavy Rain Alert",
      location: "Agra",
      category: "Weather",
      tags: ["rain", "alert"],
      source: "City Bulletin",
      published: true
    },
    {
      title: "Local Sports Tournament",
      author: "R. Singh",
      category: "Sports",
      location: "Jaipur",
      tags: ["sports", "tournament"],
      image: "sports.jpg",
      published: false
    },
    {
      title: "Health Awareness Camp",
      author: "Dr. Kaur",
      category: "Health",
      tags: ["health", "community"],
      source: "Health Weekly",
      published: true
    }
  ]);

  show("All news articles", await news.find().toArray());
  show("Technology news", await news.find({ category: "Technology" }).toArray());
  show("News articles for Agra", await news.find({ location: "Agra" }).toArray());
  show("Articles tagged alert", await news.find({ tags: "alert" }).toArray());
  show("Articles with author field present", await news.find({ author: { $exists: true } }).toArray());
});

// Q6. Website Analytics System
const { withDb, show } = require("../lib/db");

withDb(async (db) => {
  const visits = db.collection("websiteVisits");
  await visits.deleteMany({});
  await visits.insertMany([
    { page: "/home", userId: "U1", device: "mobile", browser: "Chrome", location: "Delhi", timestamp: new Date() },
    { page: "/products", userId: "U2", device: "desktop", browser: "Edge", location: "Agra", timestamp: new Date() },
    { page: "/home", userId: "U3", device: "mobile", browser: "Chrome", location: "Agra", timestamp: new Date() },
    { page: "/about", userId: "U1", device: "tablet", browser: "Safari", location: "Delhi", timestamp: new Date() },
    { page: "/products", userId: "U4", device: "mobile", browser: "Chrome", location: "Jaipur", timestamp: new Date() },
    { page: "/home", userId: "U5", device: "desktop", browser: "Firefox", location: "Delhi", timestamp: new Date() }
  ]);

  show("Most visited pages", await visits.aggregate([
    { $group: { _id: "$page", totalVisits: { $sum: 1 }, uniqueUsers: { $addToSet: "$userId" } } },
    { $project: { page: "$_id", totalVisits: 1, uniqueUsers: { $size: "$uniqueUsers" }, _id: 0 } },
    { $sort: { totalVisits: -1 } }
  ]).toArray());
  show("Commonly used devices", await visits.aggregate([
    { $group: { _id: "$device", visits: { $sum: 1 } } },
    { $sort: { visits: -1 } }
  ]).toArray());
});

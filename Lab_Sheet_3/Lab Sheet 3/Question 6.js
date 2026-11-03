use websiteAnalyticsDB;

db.visits.insertMany([
  { userId: 1, page: "/home", device: "Mobile", browser: "Chrome", location: "Delhi", timestamp: new Date() },
  { userId: 2, page: "/products", device: "Laptop", browser: "Firefox", location: "Haridwar", timestamp: new Date() },
  { userId: 3, page: "/home", device: "Mobile", browser: "Chrome", location: "Delhi", timestamp: new Date() },
  { userId: 4, page: "/about", device: "Tablet", browser: "Safari", location: "Dehradun", timestamp: new Date() }
]);

db.visits.aggregate([
  { $group: { _id: "$page", totalVisits: { $sum: 1 } } },
  { $sort: { totalVisits: -1 } }
]);

db.visits.aggregate([
  { $group: { _id: "$device", totalUsers: { $sum: 1 } } },
  { $sort: { totalUsers: -1 } }
]);

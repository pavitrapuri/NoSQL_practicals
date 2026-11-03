use eventLoggingDB;

db.events.insertMany([
  { userId: 101, event: "login", time: new Date() },
  { userId: 101, event: "failed-login", time: new Date() },
  { userId: 101, event: "failed-login", time: new Date() },
  { userId: 102, event: "file-upload", time: new Date() },
  { userId: 103, event: "password-change", time: new Date() },
  { userId: 101, event: "logout", time: new Date() }
]);

db.events.aggregate([
  { $match: { event: "failed-login" } },
  { $group: { _id: "$userId", failedAttempts: { $sum: 1 } } },
  { $match: { failedAttempts: { $gt: 1 } } }
]);

db.events.aggregate([
  { $group: { _id: "$event", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]);

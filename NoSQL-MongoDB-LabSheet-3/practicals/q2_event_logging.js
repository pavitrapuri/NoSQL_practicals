// Q2. Event Logging System
const { withDb, show } = require("../lib/db");

withDb(async (db) => {
  const events = db.collection("eventLogs");
  await events.deleteMany({});
  await events.insertMany([
    { user: "riya", event: "failed-login", time: new Date(), ip: "10.0.0.1" },
    { user: "riya", event: "failed-login", time: new Date(), ip: "10.0.0.1" },
    { user: "riya", event: "failed-login", time: new Date(), ip: "10.0.0.1" },
    { user: "aarav", event: "login", time: new Date(), ip: "10.0.0.2" },
    { user: "aarav", event: "file-upload", time: new Date(), file: "notes.pdf" },
    { user: "kabir", event: "logout", time: new Date() },
    { user: "riya", event: "password-change", time: new Date() }
  ]);

  show("All event logs", await events.find().sort({ time: -1 }).toArray());
  show("Repeated failed login attempts (2 or more)", await events.aggregate([
    { $match: { event: "failed-login" } },
    { $group: { _id: "$user", attempts: { $sum: 1 }, ipAddresses: { $addToSet: "$ip" } } },
    { $match: { attempts: { $gte: 2 } } },
    { $sort: { attempts: -1 } }
  ]).toArray());
  show("Frequently occurring event types", await events.aggregate([
    { $group: { _id: "$event", count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]).toArray());
});

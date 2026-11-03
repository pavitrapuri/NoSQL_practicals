use userNotificationDB;

db.notifications.insertMany([
  { userId: 1, message: "Your order is confirmed", type: "order", read: false, createdAt: new Date() },
  { userId: 1, message: "Welcome to the system", type: "message", read: true, createdAt: new Date() },
  { userId: 2, message: "System maintenance alert", type: "alert", read: false, createdAt: new Date() }
]);

db.notifications.find({ userId: 1, read: false });

db.notifications.updateMany(
  { userId: 1, read: false },
  { $set: { read: true } }
);

db.notifications.find({ userId: 1, read: true });

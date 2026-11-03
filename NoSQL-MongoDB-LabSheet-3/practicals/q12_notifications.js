// Q12. User Notification System
const { withDb, show } = require("../lib/db");

withDb(async (db) => {
  const notifications = db.collection("notifications");
  await notifications.deleteMany({});
  await notifications.insertMany([
    { userId: "U1", type: "message", text: "You have a new message", isRead: false, createdAt: new Date() },
    { userId: "U1", type: "order-update", text: "Your order has shipped", isRead: false, createdAt: new Date() },
    { userId: "U1", type: "system-alert", text: "Profile updated", isRead: true, createdAt: new Date() },
    { userId: "U2", type: "message", text: "Welcome", isRead: false, createdAt: new Date() }
  ]);

  show("Unread notifications for U1", await notifications.find({ userId: "U1", isRead: false }).toArray());
  show("Mark U1 unread notifications as read", await notifications.updateMany(
    { userId: "U1", isRead: false },
    { $set: { isRead: true, readAt: new Date() } }
  ));
  show("Notifications after user views them", await notifications.find({ userId: "U1" }).toArray());
});

// Q14. Real-Time Order Tracking System
const { withDb, show } = require("../lib/db");

withDb(async (db) => {
  const orders = db.collection("trackedOrders");
  await orders.deleteMany({});
  await orders.insertOne({
    orderId: "ORD501",
    customer: "Riya",
    currentStatus: "Placed",
    statusHistory: [{ status: "Placed", time: new Date("2026-11-01T09:00:00Z") }]
  });

  // Move the order through the required stages.
  const stages = ["Confirmed", "Shipped", "Delivered"];
  for (const status of stages) {
    await orders.updateOne(
      { orderId: "ORD501" },
      { $set: { currentStatus: status }, $push: { statusHistory: { status, time: new Date() } } }
    );
  }

  show("Complete order status history", await orders.findOne(
    { orderId: "ORD501" },
    { projection: { _id: 0, orderId: 1, customer: 1, currentStatus: 1, statusHistory: 1 } }
  ));
  show("Current status of the order", await orders.find(
    { currentStatus: "Delivered" },
    { projection: { _id: 0, orderId: 1, currentStatus: 1 } }
  ).toArray());
});

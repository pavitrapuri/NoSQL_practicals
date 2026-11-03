use orderTrackingDB;

db.orders.insertOne({
  orderId: 1001,
  customer: "Aman",
  currentStatus: "Placed",
  statusHistory: [
    { status: "Placed", date: new Date() }
  ]
});

db.orders.updateOne(
  { orderId: 1001 },
  {
    $set: { currentStatus: "Confirmed" },
    $push: { statusHistory: { status: "Confirmed", date: new Date() } }
  }
);

db.orders.updateOne(
  { orderId: 1001 },
  {
    $set: { currentStatus: "Shipped" },
    $push: { statusHistory: { status: "Shipped", date: new Date() } }
  }
);

db.orders.updateOne(
  { orderId: 1001 },
  {
    $set: { currentStatus: "Delivered" },
    $push: { statusHistory: { status: "Delivered", date: new Date() } }
  }
);

db.orders.findOne({ orderId: 1001 });

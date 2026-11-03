use shoppingCartDB;

db.carts.insertOne({
  userId: 1,
  items: [
    { product: "Keyboard", price: 800, quantity: 1 },
    { product: "Mouse", price: 500, quantity: 2 }
  ]
});

db.carts.updateOne(
  { userId: 1 },
  { $push: { items: { product: "USB Drive", price: 400, quantity: 1 } } }
);

db.carts.updateOne(
  { userId: 1, "items.product": "Mouse" },
  { $set: { "items.$.quantity": 3 } }
);

db.carts.updateOne(
  { userId: 1 },
  { $pull: { items: { product: "Keyboard" } } }
);

db.carts.aggregate([
  { $match: { userId: 1 } },
  { $unwind: "$items" },
  { $group: { _id: "$userId", cartValue: { $sum: { $multiply: ["$items.price", "$items.quantity"] } } } }
]);

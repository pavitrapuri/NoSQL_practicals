use ecommerceDB;

db.customers.insertMany([
  { customerId: 1, name: "Aman", email: "aman@example.com" },
  { customerId: 2, name: "Riya", email: "riya@example.com" }
]);

db.products.insertMany([
  { productId: 101, name: "Keyboard", price: 800 },
  { productId: 102, name: "Mouse", price: 500 }
]);

db.orders.insertMany([
  { orderId: 1, customerId: 1, items: [{ productId: 101, name: "Keyboard", price: 800, quantity: 2 }, { productId: 102, name: "Mouse", price: 500, quantity: 1 }], orderDate: new Date() },
  { orderId: 2, customerId: 2, items: [{ productId: 102, name: "Mouse", price: 500, quantity: 2 }], orderDate: new Date() }
]);

db.orders.aggregate([
  { $match: { customerId: 1 } },
  { $unwind: "$items" },
  { $group: { _id: "$orderId", purchaseHistory: { $push: "$items" }, orderTotal: { $sum: { $multiply: ["$items.price", "$items.quantity"] } } } }
]);

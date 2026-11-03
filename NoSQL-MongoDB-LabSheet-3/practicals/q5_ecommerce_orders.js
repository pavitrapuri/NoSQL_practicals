// Q5. E-Commerce Order Management System
const { withDb, show } = require("../lib/db");

withDb(async (db) => {
  const customers = db.collection("customers");
  const products = db.collection("shopProducts");
  const orders = db.collection("shopOrders");
  await Promise.all([customers.deleteMany({}), products.deleteMany({}), orders.deleteMany({})]);

  await customers.insertMany([
    { customerId: "C1", name: "Riya", email: "riya@example.com" },
    { customerId: "C2", name: "Aarav", email: "aarav@example.com" }
  ]);
  await products.insertMany([
    { productId: "P1", name: "Keyboard", price: 800 },
    { productId: "P2", name: "Mouse", price: 400 },
    { productId: "P3", name: "Headphones", price: 1500 }
  ]);
  await orders.insertMany([
    { orderId: "O101", customerId: "C1", items: [{ productId: "P1", name: "Keyboard", price: 800, qty: 1 }, { productId: "P2", name: "Mouse", price: 400, qty: 2 }], orderDate: new Date("2026-10-01") },
    { orderId: "O102", customerId: "C1", items: [{ productId: "P3", name: "Headphones", price: 1500, qty: 1 }], orderDate: new Date("2026-10-15") },
    { orderId: "O103", customerId: "C2", items: [{ productId: "P2", name: "Mouse", price: 400, qty: 1 }], orderDate: new Date("2026-10-18") }
  ]);

  show("Customer complete purchase history with calculated totals", await orders.aggregate([
    { $addFields: { orderTotal: { $sum: { $map: { input: "$items", as: "item", in: { $multiply: ["$$item.price", "$$item.qty"] } } } } } },
    { $lookup: { from: "customers", localField: "customerId", foreignField: "customerId", as: "customer" } },
    { $unwind: "$customer" },
    { $match: { customerId: "C1" } },
    { $project: { _id: 0, orderId: 1, orderDate: 1, items: 1, orderTotal: 1, customerName: "$customer.name" } },
    { $sort: { orderDate: 1 } }
  ]).toArray());
});

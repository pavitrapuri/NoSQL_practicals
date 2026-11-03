// Q10. Inventory Monitoring System
const { withDb, show } = require("../lib/db");

withDb(async (db) => {
  const inventory = db.collection("inventory");
  await inventory.deleteMany({});
  await inventory.insertMany([
    { product: "Keyboard", stock: 5, minimumStock: 10, supplier: "TechSupply", restockDate: new Date("2026-11-10") },
    { product: "Mouse", stock: 25, minimumStock: 10, supplier: "CompWorld", restockDate: new Date("2026-11-20") },
    { product: "Monitor", stock: 2, minimumStock: 5, supplier: "DisplayHub", restockDate: new Date("2026-11-05") },
    { product: "USB Drive", stock: 8, minimumStock: 8, supplier: "TechSupply", restockDate: new Date("2026-11-08") }
  ]);

  show("Products that need immediate restocking", await inventory.find({
    $expr: { $lte: ["$stock", "$minimumStock"] }
  }).sort({ stock: 1 }).toArray());
  show("Restocking update for Keyboard", await inventory.updateOne(
    { product: "Keyboard" },
    { $inc: { stock: 20 }, $set: { restockDate: new Date() } }
  ));
  show("Inventory after restocking", await inventory.find().toArray());
});

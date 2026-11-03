use inventoryDB;

db.inventory.insertMany([
  { product: "Keyboard", stock: 5, minimumStock: 10, supplier: "ABC Traders", restockDate: new Date("2026-11-10") },
  { product: "Mouse", stock: 25, minimumStock: 10, supplier: "XYZ Traders", restockDate: new Date("2026-11-15") },
  { product: "Monitor", stock: 3, minimumStock: 5, supplier: "Tech Supply", restockDate: new Date("2026-11-08") }
]);

db.inventory.find({ $expr: { $lte: ["$stock", "$minimumStock"] } });
db.inventory.find({ stock: { $lt: 10 } });
db.inventory.find({ restockDate: { $lte: new Date("2026-11-12") } });

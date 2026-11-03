// Q4. Flexible Product Catalog (different fields in one collection)
const { withDb, show } = require("../lib/db");

withDb(async (db) => {
  const products = db.collection("catalogProducts");
  await products.deleteMany({});
  await products.insertMany([
    { name: "Laptop Pro", category: "laptop", brand: "Nova", ram: "16GB", storage: "512GB SSD", processor: "i5", price: 65000 },
    { name: "Phone X", category: "mobile", brand: "Orbit", ram: "8GB", storage: "128GB", cameraMP: 50, battery: "5000mAh", price: 22000 },
    { name: "Camera Z", category: "camera", brand: "PixelPro", sensor: "APS-C", lens: "18-55mm", video: "4K", price: 48000 },
    { name: "Laptop Air", category: "laptop", brand: "Nova", ram: "8GB", storage: "256GB SSD", processor: "i3", price: 42000 }
  ]);

  show("All products in common collection", await products.find().toArray());
  show("Laptops with 16GB RAM", await products.find({ category: "laptop", ram: "16GB" }).toArray());
  show("Mobiles with 50MP camera", await products.find({ category: "mobile", cameraMP: { $gte: 50 } }).toArray());
  show("Cameras supporting 4K video", await products.find({ category: "camera", video: "4K" }).toArray());
});

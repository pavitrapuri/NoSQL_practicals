use productCatalogDB;

db.products.insertMany([
  { name: "Laptop A", category: "laptop", price: 55000, attributes: { ram: "8GB", processor: "i5", storage: "512GB SSD" } },
  { name: "Mobile A", category: "mobile", price: 18000, attributes: { ram: "6GB", camera: "50MP", battery: "5000mAh" } },
  { name: "Camera A", category: "camera", price: 42000, attributes: { megapixels: "24MP", lens: "18-55mm" } }
]);

db.products.find({ category: "laptop", "attributes.ram": "8GB" });
db.products.find({ category: "mobile", "attributes.camera": "50MP" });
db.products.find({ category: "camera", "attributes.megapixels": "24MP" });
db.products.find({ category: "laptop", price: { $lt: 60000 } });

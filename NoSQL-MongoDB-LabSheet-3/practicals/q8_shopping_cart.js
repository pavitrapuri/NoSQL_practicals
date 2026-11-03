// Q8. Shopping Cart using embedded MongoDB documents
const { withDb, show } = require("../lib/db");

withDb(async (db) => {
  const carts = db.collection("shoppingCarts");
  await carts.deleteMany({});
  await carts.insertOne({
    userId: "U101",
    items: [
      { productId: "P1", name: "Keyboard", price: 800, quantity: 1 },
      { productId: "P2", name: "Mouse", price: 400, quantity: 2 }
    ]
  });

  // Add a product to the embedded items array.
  await carts.updateOne({ userId: "U101" }, {
    $push: { items: { productId: "P3", name: "USB Drive", price: 600, quantity: 1 } }
  });
  // Change the quantity of an existing product.
  await carts.updateOne({ userId: "U101", "items.productId": "P2" }, {
    $set: { "items.$.quantity": 3 }
  });
  // Remove a product from the cart.
  await carts.updateOne({ userId: "U101" }, {
    $pull: { items: { productId: "P1" } }
  });

  const cart = await carts.findOne({ userId: "U101" });
  const total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  show("Updated shopping cart", cart);
  show("Calculated cart value", { total });
});

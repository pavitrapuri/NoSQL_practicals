// Q9. Product Review and Rating System
const { withDb, show } = require("../lib/db");

withDb(async (db) => {
  const reviews = db.collection("productReviews");
  await reviews.deleteMany({});
  await reviews.insertMany([
    { productId: "P1", productName: "Keyboard", customer: "Riya", rating: 5, review: "Excellent" },
    { productId: "P1", productName: "Keyboard", customer: "Aarav", rating: 4, review: "Good" },
    { productId: "P1", productName: "Keyboard", customer: "Kabir", rating: 3, review: "Average" },
    { productId: "P2", productName: "Mouse", customer: "Riya", rating: 4, review: "Useful" },
    { productId: "P2", productName: "Mouse", customer: "Aarav", rating: 5, review: "Great" }
  ]);

  show("Average rating and number of reviews per product", await reviews.aggregate([
    { $group: {
      _id: "$productId",
      productName: { $first: "$productName" },
      averageRating: { $avg: "$rating" },
      numberOfReviews: { $sum: 1 }
    } },
    { $project: { _id: 0, productId: "$_id", productName: 1, averageRating: { $round: ["$averageRating", 2] }, numberOfReviews: 1 } },
    { $sort: { productName: 1 } }
  ]).toArray());
});

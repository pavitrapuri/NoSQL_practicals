use productReviewDB;

db.reviews.insertMany([
  { productId: 101, customer: "Aman", rating: 5, review: "Excellent" },
  { productId: 101, customer: "Riya", rating: 4, review: "Good" },
  { productId: 102, customer: "Karan", rating: 3, review: "Average" },
  { productId: 102, customer: "Neha", rating: 5, review: "Very good" }
]);

db.reviews.aggregate([
  { $group: { _id: "$productId", averageRating: { $avg: "$rating" }, numberOfReviews: { $sum: 1 } } },
  { $sort: { averageRating: -1 } }
]);

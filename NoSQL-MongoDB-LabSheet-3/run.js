// Run all 15 practicals in sequence.
// Q11 checks whether MongoDB is configured as a replica set before using transactions.
const { spawnSync } = require("child_process");
const path = require("path");

const practicals = [
  "q1_student_activity.js",
  "q2_event_logging.js",
  "q3_mini_blog.js",
  "q4_flexible_catalog.js",
  "q5_ecommerce_orders.js",
  "q6_website_analytics.js",
  "q7_content_management.js",
  "q8_shopping_cart.js",
  "q9_product_reviews.js",
  "q10_inventory.js",
  "q11_wallet_transfer.js",
  "q12_notifications.js",
  "q13_course_learning.js",
  "q14_order_tracking.js",
  "q15_flexible_news.js"
];

for (const file of practicals) {
  console.log(`\n\n========== Running ${file} ==========`);
  const result = spawnSync(process.execPath, [path.join(__dirname, "practicals", file)], {
    stdio: "inherit",
    env: process.env
  });
  if (result.error) console.error(`Could not start ${file}:`, result.error.message);
  if (result.status !== 0) console.log(`${file} finished with status ${result.status}.`);
}

# NoSQL Database Design – Lab Sheet 3 (MongoDB)

**COER University | BCA | MongoDB JavaScript Practicals**

This project contains runnable solutions for all 15 questions in Lab Sheet 3. Each practical is a separate JavaScript file. The programs create sample data, execute MongoDB operations/queries, and print results in the terminal. No output screenshots are included.

## 1. Requirements

Install these on the computer:

1. **Node.js 18 or later**: https://nodejs.org/
2. **MongoDB Community Server 6 or later**: https://www.mongodb.com/try/download/community
3. **MongoDB Shell (mongosh)**: https://www.mongodb.com/try/download/shell

MongoDB Compass is optional; it can be used to view the database.

Start the MongoDB Server service before running the practicals. The default connection is:

`mongodb://127.0.0.1:27017`

## 2. Setup

Open this project folder in VS Code. Open Terminal > New Terminal and run:

```bash
npm install
```

This installs the MongoDB Node.js driver used by the programs.

## 3. Run one practical

Examples:

```bash
npm run q1
npm run q2
npm run q3
```

Use `npm run q4` through `npm run q15` for the remaining practicals.

To run all practicals in sequence:

```bash
npm run all
```

The programs use the database `NoSQL_Lab_Sheet_3`. They clear and recreate only their own practical collection(s) so the sample results remain predictable. Do not use this sample project against a database containing important personal data.

## 4. Practical list

| Script | Lab Sheet question |
|---|---|
| `q1_student_activity.js` | Student Activity Tracking System |
| `q2_event_logging.js` | Event Logging System |
| `q3_mini_blog.js` | Mini Blogging Platform |
| `q4_flexible_catalog.js` | Flexible Product Catalog |
| `q5_ecommerce_orders.js` | E-Commerce Order Management |
| `q6_website_analytics.js` | Website Analytics System |
| `q7_content_management.js` | Content Management System |
| `q8_shopping_cart.js` | Shopping Cart with embedded documents |
| `q9_product_reviews.js` | Product Review and Rating System |
| `q10_inventory.js` | Inventory Monitoring System |
| `q11_wallet_transfer.js` | Bank Wallet Transfer using transactions |
| `q12_notifications.js` | User Notification System |
| `q13_course_learning.js` | Course Learning Platform |
| `q14_order_tracking.js` | Real-Time Order Tracking |
| `q15_flexible_news.js` | Flexible News Database |

## 5. Question 11: Replica Set requirement

MongoDB transactions require a replica set or sharded cluster. A default standalone MongoDB installation does not support transactions.

For a local single-node replica set, configure your MongoDB Server with:

`replication.replSetName: rs0`

On Windows, edit the MongoDB configuration file (commonly `C:\Program Files\MongoDB\Server\<version>\bin\mongod.cfg`) and add:

```yaml
replication:
  replSetName: rs0
```

Restart the MongoDB Server service. Then open `mongosh` and run this command once:

```javascript
rs.initiate()
```

Wait until the node becomes PRIMARY. Then run:

```bash
npm run q11
```

The Q11 script uses `mongodb://127.0.0.1:27017/?replicaSet=rs0`. If the server is standalone, it prints a helpful message instead of attempting a transaction.

## 6. Use another MongoDB server

You can set a different connection string before running commands.

PowerShell example:

```powershell
$env:MONGODB_URI="mongodb://127.0.0.1:27017"
npm run q1
```

For a replica set, use a URI that includes `?replicaSet=rs0`.

## 7. Folder structure

```text
NoSQL-MongoDB-LabSheet-3/
├── lib/
│   └── db.js
├── practicals/
│   ├── q1_student_activity.js
│   ├── q2_event_logging.js
│   ├── q3_mini_blog.js
│   ├── q4_flexible_catalog.js
│   ├── q5_ecommerce_orders.js
│   ├── q6_website_analytics.js
│   ├── q7_content_management.js
│   ├── q8_shopping_cart.js
│   ├── q9_product_reviews.js
│   ├── q10_inventory.js
│   ├── q11_wallet_transfer.js
│   ├── q12_notifications.js
│   ├── q13_course_learning.js
│   ├── q14_order_tracking.js
│   └── q15_flexible_news.js
├── package.json
├── run.js
└── README.md
```

## 8. Notes

- These are educational sample implementations based on the 15 prompts in Lab Sheet 3.
- Every script inserts its own sample records before running queries, so it can be tested independently.
- Dates and sample names are demonstration data.
- The project contains code only; it intentionally does not contain output screenshots.

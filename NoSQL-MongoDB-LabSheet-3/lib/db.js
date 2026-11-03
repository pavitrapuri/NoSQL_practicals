const { MongoClient } = require("mongodb");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const DB_NAME = process.env.DB_NAME || "NoSQL_Lab_Sheet_3";

async function withDb(work) {
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    console.log(`\nConnected to MongoDB database: ${DB_NAME}`);
    await work(db, client);
  } catch (error) {
    console.error("\nError:", error.message);
    if (error.message.includes("ECONNREFUSED")) {
      console.error("MongoDB server is not running. Start the MongoDB service and try again.");
    }
    process.exitCode = 1;
  } finally {
    await client.close();
  }
}

function show(title, data) {
  console.log(`\n--- ${title} ---`);
  console.dir(data, { depth: 8, colors: true });
}

module.exports = { withDb, show };

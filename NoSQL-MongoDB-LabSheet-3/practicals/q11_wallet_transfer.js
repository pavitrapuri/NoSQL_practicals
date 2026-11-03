// Q11. Bank Wallet Transfer using MongoDB Transactions
// IMPORTANT: MongoDB transactions require a replica set or sharded cluster.
const { MongoClient } = require("mongodb");

const URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/?replicaSet=rs0";
const DB_NAME = process.env.DB_NAME || "NoSQL_Lab_Sheet_3";

async function main() {
  const client = new MongoClient(URI);
  try {
    await client.connect();
    const admin = client.db("admin");
    const hello = await admin.command({ hello: 1 });
    if (!hello.setName && !hello.msg) {
      console.log("This MongoDB server is standalone. Transactions need a replica set.");
      console.log("Follow the Replica Set setup instructions in README.md, then run npm run q11.");
      return;
    }

    const db = client.db(DB_NAME);
    const wallets = db.collection("wallets");
    await wallets.deleteMany({});
    await wallets.insertMany([
      { userId: "U1", name: "Aarav", balance: 5000 },
      { userId: "U2", name: "Riya", balance: 2000 }
    ]);

    const session = client.startSession();
    try {
      await session.withTransaction(async () => {
        const amount = 1000;
        const senderUpdate = await wallets.updateOne(
          { userId: "U1", balance: { $gte: amount } },
          { $inc: { balance: -amount } },
          { session }
        );
        if (senderUpdate.modifiedCount !== 1) throw new Error("Insufficient balance or sender not found.");

        const receiverUpdate = await wallets.updateOne(
          { userId: "U2" },
          { $inc: { balance: amount } },
          { session }
        );
        if (receiverUpdate.modifiedCount !== 1) throw new Error("Receiver not found.");
      });
      console.log("Transaction completed successfully.");
      console.dir(await wallets.find().toArray(), { depth: 5, colors: true });
    } finally {
      await session.endSession();
    }
  } catch (error) {
    console.error("Transaction error:", error.message);
    process.exitCode = 1;
  } finally {
    await client.close();
  }
}
main();

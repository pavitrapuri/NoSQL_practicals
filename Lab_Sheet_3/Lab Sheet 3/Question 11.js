use bankWalletDB;

// Run this script on a MongoDB replica set.
const session = db.getMongo().startSession();
const walletDB = session.getDatabase("bankWalletDB");

walletDB.wallets.insertMany([
  { userId: 1, name: "Aman", balance: 5000 },
  { userId: 2, name: "Riya", balance: 3000 }
]);

session.startTransaction();

try {
  walletDB.wallets.updateOne(
    { userId: 1, balance: { $gte: 1000 } },
    { $inc: { balance: -1000 } }
  );

  walletDB.wallets.updateOne(
    { userId: 2 },
    { $inc: { balance: 1000 } }
  );

  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
  print(error);
} finally {
  session.endSession();
}

db.wallets.find();

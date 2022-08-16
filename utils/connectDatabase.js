import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export const dbConnection = async () => {
  try {
    const connection = process.env.MONGODB_URI;

    if (conn.isConnected) return;

    const db = await connect(connection);
    conn.isConnected = db.connections[0].readyState;
    console.log("[✅] in", db.connection.db.databaseName);
  } catch (error) {
    console.log("[❌] ", error.message);
  }
};

connection.on("connected", () => {
  console.log("[✅] MongoDB is connected");
});

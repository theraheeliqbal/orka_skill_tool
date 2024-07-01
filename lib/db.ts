import { MongoClient, Db } from "mongodb";
import mongoose from "mongoose";

let isConnected: boolean;
let db: Db | undefined;

export const connectToDataBase = async () => {
  mongoose.set("strictQuery", true);

  const MONGODB_URL = process.env.MONGODB_URI;

  try {
    if (!isConnected) {
      const client = await new MongoClient(MONGODB_URL as string).connect();

      db = client.db();
      isConnected = true;

      return db;
    }

    return db;
  } catch (error) {
    console.log("Error in db", error);
  }
};

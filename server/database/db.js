import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = async () => {
  const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-5sz64dg-shard-00-00.zr1xqpv.mongodb.net:27017,ac-5sz64dg-shard-00-01.zr1xqpv.mongodb.net:27017,ac-5sz64dg-shard-00-02.zr1xqpv.mongodb.net:27017/?ssl=true&replicaSet=atlas-8rdi5f-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
    });
    console.log("Database connection established");
  } catch (error) {
    console.log("Error connecting to Database: " + error);
  }
};
export default Connection;

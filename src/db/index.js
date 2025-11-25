import mongoose from "mongoose";
import { db_name } from "../constant.js";

export const db_connection = async () => {
  try {
    if (!process.env.MONGODB_URI) {  // debugg 
         console.error("❌ MONGODB_URI is missing in .env file");
         process.exit(1)
}   


    const db_connection_uri = await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);

    console.log(
      `Database connection successful!\nHOST: ${db_connection_uri.connection.host}\nDB NAME: ${db_connection_uri.connection.name}`
    );

  } catch (error) {
    console.error(`Database connection failed\nError: ${error.message}`);
    process.exit(1);
  }
};

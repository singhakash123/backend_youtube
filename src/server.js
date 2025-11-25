import dotenv from "dotenv";
import { db_connection } from "./db/index.js";
import { app } from "./app.js";

// Load env
dotenv.config({
  path: "./.env",
});

// 
const port = process.env.PORT || 4000;

db_connection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening at port no : ${port}`);
    });
  })
  .catch((error) => {
    console.error(`Database connection failed:\n${error.message}`);
  });

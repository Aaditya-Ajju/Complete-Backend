
import app from "./app.js";
import dotenv from "dotenv"
import connectDb from "./db/index.js";
dotenv.config({ quiet:true});


connectDb()
.then(()=>{
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
})
.catch((error)=>{
  console.error("Failed to connect to the database:", error);
  
})















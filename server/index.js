import express from "express";
import dotenv from "dotenv";
import { connect } from "./lib/db.js";
import authRoute from "./routes/authRoutes.js"
import fileUpload from "express-fileupload";
import {v2 as cloudinary} from 'cloudinary';
import cors from "cors"

const app = express();
const port = 3434;

dotenv.config();
app.use(cors())
app.use(express.json())
app.use(fileUpload({ useTempFiles: true }));
// API
app.use("/api/auth", authRoute)
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env. API_SECRETE,
});

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "server is live" });
});
app.use((req, res) => {
  res.status(404).json({ success: false, errMsg: "route not found" });
});

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`http://localhost:${port}`);
      }); 
    } catch (error) {
      console.log(`can not connect to server ${error.message}`);
    }
  })
  .catch(() => {
    console.log(`invalid database connection ${error.message}`);
  });

import express from "express";
import cors from "cors";
import { connectDB } from "./configs/db.js";

//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

//db config
connectDB();

//api routes
app.get("/", (req, res) => {
  res.status(200).send("API is running");
});

//listen

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// mongodb+srv://it22221100:KwIYEhSexdgccB98@cluster0.g0skfef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

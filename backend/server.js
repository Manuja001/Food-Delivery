import express from "express";
import cors from "cors";

//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

//api routes
app.get("/", (req, res) => {
  res.status(200).send("API is running");
});

//listen

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
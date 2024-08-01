import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://it22221100:KwIYEhSexdgccB98@cluster0.g0skfef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch((error) => {
      console.log(error.reason);
    });
};

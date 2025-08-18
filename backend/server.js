import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";

dotenv.config()
const app = express();

// Default middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// User route path
app.use("/api/v1/user", userRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at PORT : ${PORT}`)
})

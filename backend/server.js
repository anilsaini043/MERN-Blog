import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import cors from "cors";

dotenv.config()
const app = express();

// Default middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))

// User route path
app.use("/api/v1/user", userRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at PORT : ${PORT}`)
})

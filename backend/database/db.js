import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Mongodb connection successfull.")
    } catch (error) {
        console.log("MongoDB connection error", error);
    }
}

export default connectDB;
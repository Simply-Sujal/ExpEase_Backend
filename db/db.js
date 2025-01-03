import mongoose from "mongoose";

const dbConnect = async (MONGO_URI) => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connected successfully.")
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
}

export default dbConnect;
import dotenv from "dotenv";
import dbConnect from "./db/db.js";
dotenv.config();


const startServer = async (app) => {
    try {
        await dbConnect(process.env.MONGO_URI);
        app.listen(process.env.PORT, () => {
            console.log(`Server is running at port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

export default startServer;
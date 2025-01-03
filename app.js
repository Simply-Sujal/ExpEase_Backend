import express from "express";
import cors from "cors";
import startServer from "./connection.js";
import expe from "./routes/experince.routes.js";

const app = express();

// Define allowed origins
const allowedOrigins = ['http://localhost:3000']; // Adjust according to your needs

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: 'GET,PUT,POST,DELETE,PATCH,HEAD',
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());  // Use built-in express JSON parser
app.use(express.urlencoded({ extended: false }));  // For parsing URL-encoded data

app.get("/", (req, res) => {
    res.json({ msg: "I am working good" });
});

// API implementation
app.use("/api/v1/experience", expe);

startServer(app);

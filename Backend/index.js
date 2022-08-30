import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path"

const app = express();
import { router as userRoute } from './route/userRoute.js';

dotenv.config();
const port = process.env.PORT;

// Handling cors error
app.use(cors())

// Deployment

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production")
{
    app.use(express.static(path.join(__dirname1, "/frontend/build")));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
    );
} else
{
    app.get("/", (req, res) =>
    {
        res.send("API is running..");
    });
}


// connect to db
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
{
    console.log("DB connected")
})

// body-parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Routes
app.use('/', userRoute)

//Listening on the port
app.listen(port, () =>
{
    console.log(`Listening on port ${port}`)
})



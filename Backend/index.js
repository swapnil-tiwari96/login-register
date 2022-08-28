import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
import { router as userRoute } from './route/userRoute.js';

dotenv.config();
const port = process.env.PORT;

// Handling cors error
app.use(cors())

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
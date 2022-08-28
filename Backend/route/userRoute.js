import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

let router = express.Router();

router.get('/login', function (req, res)
{
    res.send("Login")
});

router.post('/register', function (req, res)
{
    res.send("Register")
});

router.get('./getData', function (req, res)
{
    res.send("dashboard")
})

export { router }; 
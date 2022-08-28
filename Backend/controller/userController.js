import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

export const login = (req, res) =>
{
    res.send("Login")
}

export const register = (req, res) =>
{
    res.send("Register")
}

export const dashboard = (req, res) =>
{
    res.send("Dashboard")
}
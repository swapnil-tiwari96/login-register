import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import User from "../model/userModel.js";

dotenv.config();

export const login = (req, res) =>
{
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) =>
    {
        if (user)
        {
            bcrypt.compare(password, user.password, (err, result) =>
            {
                if (err)
                {
                    return res.send("Authentication failed");
                }
                if (result)
                {
                    const token = jwt.sign(
                        {
                            email: user.email,
                            userId: user._id
                        },
                        process.env.SECRET,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(200).send({ message: "Authentication successfull", user: user });
                }
                res.send("Authentication failed");
            });
        }
        else
        {
            res.send("User not registered")
        }
    })
}

export const register = (req, res) =>
{
    const { firstName, lastName, email, password } = req.body
    User.findOne({ email: email }, (err, user) =>
    {
        if (user)
        {
            res.send("User exists")
        }
        else
        {
            bcrypt.hash(password, 10, (err, hash) =>
            {
                if (err)
                {
                    res.send(err)
                }
                else
                {
                    const user = new User({
                        firstName, lastName, email, password: hash
                    })
                    user.save(err =>
                    {
                        if (err)
                        {
                            res.send(err)
                        }
                        else
                        {
                            res.send("Registered")
                        }
                    })
                }
            })
        }
    })


}

export const getData = (req, res) =>
{
    User.find({}, (err, userList) =>
    {
        if (err)
        {
            res.send(err)
        }
        else
        {
            res.send(userList)
        }
    }).select('firstName lastName email')
}
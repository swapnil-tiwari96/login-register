import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config();

export const checkAuth = (req, res, next) =>
{
    try
    {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.SECRET);
        req.userData = decoded;
        next();
    } catch (error)
    {
        return res.status(401).send('Auth failed');
    }
};
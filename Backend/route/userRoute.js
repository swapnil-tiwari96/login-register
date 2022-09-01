import express from "express";
import * as userController from '../controller/userController.js'
import { checkAuth } from '../middleware/checkAuth.js'

let router = express.Router();

router.post('/login', userController.login);

router.post('/register', userController.register);

router.get('/getData', checkAuth, userController.getData)

export { router }; 
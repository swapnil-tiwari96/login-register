import express from "express";
import * as userController from '../controller/userController.js'

let router = express.Router();

router.post('/login', userController.login);

router.post('/register', userController.register);

router.get('./getData', userController.dashboard)

export { router }; 
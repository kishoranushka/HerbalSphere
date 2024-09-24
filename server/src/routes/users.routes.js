import express from 'express';
import { createUser, loginUser } from '../controller/users.controller.js';

const userRouter = express.Router();

//Routes
userRouter.post('/register', createUser);
userRouter.get('/login', loginUser);

export default userRouter;

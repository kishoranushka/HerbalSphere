import express from 'express';
import { createUser, loginUser } from '../controller/auth.controller.js';
import { loginSchema, signupSchema } from '../validators/auth.validator.js';
import validate from '../middleware/validate.middleware.js';

const userRouter = express.Router();

//Routes
userRouter.post('/register', validate(signupSchema), createUser);
userRouter.get('/login', validate(loginSchema), loginUser);

export default userRouter;

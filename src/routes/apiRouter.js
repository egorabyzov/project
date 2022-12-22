import express from 'express';
import { Todo, User } from '../../db/models';
import checkUser from '../middlewares/isReg';
import checkAuth from '../middlewares/isAuth';

const api = express.Router();

export default api;

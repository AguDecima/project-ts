import { Router } from 'express';
import { deleteUser, getUser } from '../controller/user';

export const router = Router();

router.get('/user', getUser);
router.get('/delete', deleteUser);
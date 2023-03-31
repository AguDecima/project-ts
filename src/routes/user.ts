import { Router } from 'express';
import { deleteUser, getUser, createUser } from '../controller/user';

export const router = Router();

router.get('/user', getUser);
// create GET /user/:id
router.post('/user', createUser);
router.get('/delete/:id', deleteUser);

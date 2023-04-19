import { Router } from 'express';
import { deleteUser, getUser, createUser1 } from '../controller/user';
import { getPokemon } from '../controller/pokemon';
import { validate } from '../middleware/jwt';

export const router = Router();

router.get('/user', [validate], getUser);
// create GET /user/:id
router.post('/user', createUser1);
router.delete('/user/:id', deleteUser);
router.get('/pokemon', getPokemon);

import { Router } from 'express';
import { deleteUser, getUser, createUser } from '../controller/user';
import { getPokemon } from '../controller/pokemon';

export const router = Router();

router.get('/user', getUser);
// create GET /user/:id
router.post('/user', createUser);
router.delete('/user/:id', deleteUser);
router.get('/pokemon', getPokemon);

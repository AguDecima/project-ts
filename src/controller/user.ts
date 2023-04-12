import { Request, Response } from "express";

import users from '../bd/users.json';


export function getUser(req: Request, res: Response) {
    return res.send({
        id: 38652010,
        name: 'Agustin',
        surname: 'Decima'
    }).json();
}

function getUserById(req: Request, res: Response) {
    // recibir id del params
    // buscar el usuario de la bd
    // retornar usuario si es que existe
    // sino devoler error
}

export function deleteUser(req: Request, res: Response) {

    const { id } = req.params;

    const isExist = users.some(u => u.dni.toString() === id);

    if(isExist == false) return res.status(404).send({
        message: `user doesn't exist`
    }).json();
    
    return res.send({
        message: `user deleted ${id}`
    }).json();
}


export function createUser(req: Request, res: Response) {

    const body = req.body;

    return res.send({
        id: 30344833,
        ...body
    }).json();
}
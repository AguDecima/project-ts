import { Request, Response } from "express";

import users from '../bd/users.json';


export function getUser(req: Request, res: Response) {
    return res.send({
        id: 38652010,
        name: 'Agustin',
        surname: 'Decima'
    }).json();
}
export function getUserById(req: Request, res: Response) {
    const { id } = req.params; // recibir id del params

    const usuario = users.filter(u => u.dni.toString() === id); // buscar el usuario de la bd
    if (usuario.length === 0) {
        return res.status(404).send({
            message: `user not exists ${id}`
        }).json();
    } 
    return res.send({
        ...usuario[0]
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

    if (isExist == false) return res.status(404).send({
        message: `user doesn't exist`
    }).json();

    return res.send({
        message: `user deleted ${id}`
    }).json();
}


// named function
export function createUser1(req: Request, res: Response) {

    const body = req.body;

    return res.send({
        id: 30344833,
        ...body
    }).json();
}

// arrow function
const createUser2 = (req: Request, res: Response) => {
    const body = req.body;

    return res.send({
        id: 30344833,
        ...body
    }).json();
}

// anonymous function
((a: number, b: number) => {
    console.log(a + b);
})(1, 2);


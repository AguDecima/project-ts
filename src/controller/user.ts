import { Request, Response } from "express";

export function getUser(req: Request, res: Response) {
    return res.send({
        id: 38652010,
        name: 'Agustin',
        surname: 'Decima'
    }).json();
}

export function deleteUser(req: Request, res: Response) {

    const { id } = req.params;

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
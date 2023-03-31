import { Request, Response } from "express";

export function getUser(req: Request, res: Response) {
    return res.send({
        id: 38652010,
        name: 'Agustin',
        surname: 'Decima'
    }).json();
}

export function deleteUser(req: Request, res: Response) {
    return res.send({
        message: 'user deleted'
    }).json();
}
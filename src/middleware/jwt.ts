import { NextFunction, Request, Response } from "express";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers.authorization;

    if (Number(auth) === 12345) next();
    else res.status(403).send({
        message: 'FORBIDDEN'
    }).json()

}
import axios from "axios";
import { Request, Response } from "express";

export async function getPokemon(req: Request, res: Response) {

    const poke = await axios.get('https://pokeapi.co/api/v2/ability/?limit=20&offset=20');

    return res.send({
        ...poke.data
    }).json();

}
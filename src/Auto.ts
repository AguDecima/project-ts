import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo implements Automotor{

    private _puertas: number;

    constructor(p: string, c: string, m: number, ma: string, pu: number) {
        super(p,c,m,ma);
        this._puertas = pu;
    }
    contratarSeguro(): string {
        throw new Error("Method not implemented.");
    }

}
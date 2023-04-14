import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo implements Automotor {

    private _cc: number;

    constructor(p: string, c: string, m: number, ma: string, cc: number) {
        super(p,c,m,ma);
        this._cc = cc;
    }
    
    contratarSeguro(): string {
        throw new Error("Method not implemented.");
    }

}
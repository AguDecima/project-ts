export class Vehiculo {

    private _patente: string;
    private _color: string;
    private _modelo: number;
    private _marca: string;

    
    public get patente() : string {
        return this._patente
    }

    public get color() : string {
        return this._color
    }

    public get modelo() : number {
        return this._modelo
    }

    public get marca() : string {
        return this._marca
    }

    constructor(p: string, c: string, m: number, ma: string) {
        this._patente = p;
        this._color = c;
        this._modelo = m;
        this._marca = ma;
    }
}
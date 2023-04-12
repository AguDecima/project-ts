export class User {

    // attributes
    private _name: string;
    private _surname: string;
    private _dni: number;

    // getter & setters
    get name() {
        return this._name;
    }
    set name(name: string) { 
        this._name = name
    }
    get surname() {
        return this._surname;
    }
    set surname(surname: string) { 
        this._surname = surname
    }
    get dni() {
        return this._dni;
    }

    constructor(name: string, surname: string) {
        this._name = name;
        this._surname = surname;
        this._dni = 1;
    }

    // methods
    info() {
        return `Nombre: ${this._name} - Apellido: ${this._surname} - DNI: ${this._dni}`;
    }


}
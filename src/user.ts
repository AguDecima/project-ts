export class User {

    // attributes
    private _name: string;
    private _surname: string;
    private _dni: number;
    private _birthday: number

    // getter & setters
    get name() {
        return this._name;
    }
    set name(name: string) { 
        this._name = name.toLocaleUpperCase()
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

    constructor(name: string, surname: string, year: number) {
        this._name = name.toLocaleUpperCase();
        this._surname = surname.toLocaleUpperCase();
        this._dni = 1;
        this._birthday = year;
    }

    // methods
    info() {
        return `Nombre: ${this._name} - Apellido: ${this._surname} - DNI: ${this._dni}`;
    }

    getAge() {
        return new Date().getFullYear() - this._birthday;
    }


}
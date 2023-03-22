// types primitives
let n: number = 2;
let s: string = "hello word"
let b: boolean = true;
let a: any = "any"

let na: number[] = [1, 2, 3, 4, 5];
let sa: string[] = ["tuc", "salta", "jujuy"];
let aa: any[] = [1, "string", true];

// custom type
type User = {
    name: string;
    surname: string;
    age: number;
    address: string[]
}

interface Animal {
    name: string;
    countryOrigin: string;
}


let userCustom: User = {
    name: "pablo",
    surname: "escobar",
    age: 45,
    address: ["tuc"]
}

let nutria: Animal = {
    name: 'emi',
    countryOrigin: "sudafrica"
}

console.log(userCustom);
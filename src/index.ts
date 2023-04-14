import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Vehiculo } from "./Vehiculo";
import { User } from "./user";

const u1 = new User('agustin', 'decima', 1994);

// u1.name = 'rafael'
// console.log(u1.info());
// console.log(u1.getAge());

// herancia
const a = new Auto('AD', 'rojo', 2012, 'Chevrolet', 5);
const m = new Moto('AM', 'negra', 2023, 'KTM', 200);

// polimorfismo
const ve: Vehiculo[] = [a, m];

// Persona
// Alumno Maestro Ordenanza
// personas = [a,a2, m1,m3, o3,o4]









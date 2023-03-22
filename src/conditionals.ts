const age: number = 19
const country: string = 'bol'

// && AND (age > 18 && country === "arg" )
// || OR (age > 18 || country === "arg" )

// = asignacion let a = 2;
// == '4' == 4 // true
// === '4' === 4 // false


// classic version
if (age > 18) {
    console.log('mayor de edad');
} else {
    console.log('menor de edad');
}

// new version
if (age > 18) console.log('mayor de edad');
else console.log('menor de edad');

if (age > 18 && country === 'arg') {
    console.log('pasa la frontera');
} else if (age > 18 && country === "par") {
    console.log('vuelva a paraguay');
} else {
    console.log('sos de otro lado');
}

switch (age) {
    case 17:
        console.log('menor de edad');
        break;
    case 18:
        console.log('mayor de edad');
        break;
    default:
        console.log('no cumple con requisitos');
        break;
}
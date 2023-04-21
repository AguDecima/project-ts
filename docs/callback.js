const CalcularSueldo = (sueldos, determinarImpuestos) => {
    sueldos.forEach(s => {
        determinarImpuestos(s);
    });    
}

const determinarImpuestos = (x) => {
    console.log(`Su sueldo es ${x * 10}`);
}

CalcularSueldo([10,10,20,100], determinarImpuestos);

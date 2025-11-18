console.log("La página ha cargado");

const NOTA_MAX = 10;
const NOTA_MIN = 0;
const NOTA_SUFICIENTE = 5;
const NOTA_NOTABLE = 6;
const NOTA_SOBRESALIENTE = 8;

export let notas = [];


export function insnertarNota(nota) {
    if (nota.isNaN) {
        console.log(`La nota ${nota} no es un número`);
        return false;
    }
    if (nota < NOTA_MIN || nota > NOTA_MAX) {
        console.log(`${nota}: fuera de rango`)
        return false;
    }
    notas.push(nota);
}

export function calcularPromedio(notas) {
    let total = 0;
    const totalNotas = notas.reduce((acumulador, nota) => acumulador + nota, total);
    return totalNotas / notas.length;
}

export function obtenerCalificacion(promedio) {
    if (promedio < NOTA_SUFICIENTE) {
        return {estado: "suspendido", calificacion: "suspenso"};
    }

    if (promedio < NOTA_NOTABLE) {
        return {estado: "aprobado", calificacion: "suficiente"};
    }

    if (promedio < NOTA_SOBRESALIENTE) {
        return {estado: "aprobado", calificacion: "notable"};
    }

    return {estado: "aprobado", calificacion: "sobresaliente"};
}

console.log(insnertarNota(4));
console.log(insnertarNota(5));
console.log(insnertarNota(6));
console.log(calcularPromedio(notas));




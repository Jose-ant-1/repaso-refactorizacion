import {
    insnertarNota,
    calcularPromedio,
    obtenerCalificacion,
    notas
} from "./index.js";

// Antes de cada prueba que use notas:
function resetNotas() {
    notas.length = 0;
}


const pruebas = [
    // --- pruebas de insertar nota ---
    {accion: "insertar", valor: 5, expected: true},
    {accion: "insertar", valor: -1, expected: false},
    {accion: "insertar", valor: 11, expected: false},
    {accion: "insertar", valor: "hola", expected: false},

    // --- pruebas de calcularPromedio ---
    {accion: "promedio", lista: [4,5,6], expected: 5},
    {accion: "promedio", lista: [10], expected: 10},

    // --- pruebas de obtenerCalificacion ---
    {accion: "calificacion", promedio: 4, expected: "suspenso"},
    {accion: "calificacion", promedio: 5, expected: "suficiente"},
    {accion: "calificacion", promedio: 7, expected: "notable"},
    {accion: "calificacion", promedio: 9, expected: "sobresaliente"},
];

pruebas.forEach((p, i) => {
    let resultado;

    switch (p.accion) {

        case "insertar":
            resetNotas();
            resultado = insnertarNota(p.valor);
            break;

        case "promedio":
            resultado = calcularPromedio(p.lista);
            break;

        case "calificacion":
            resultado = obtenerCalificacion(p.promedio).calificacion;
            break;
    }

    resultado === p.expected
        ? console.log(`prueba ${i + 1}: superada`)
        : console.log(`prueba ${i + 1}: no superada, resultado: ${resultado}`);
});

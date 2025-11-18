document.addEventListener("DOMContentLoaded", () => {
    console.log("La página ha cargado");

    const NOTA_MAX = 10;
    const NOTA_MIN = 0;
    const NOTA_SUFICIENTE = 5;
    const NOTA_NOTABLE = 6;
    const NOTA_SOBRESALIENTE = 8;

    let notas = [];

    function compruebaNota(nota) {

        if (!nota.isNaN) {
            console.log(`La nota ${nota} no es un número`);
            return false;
        }
        if (nota < NOTA_MIN || nota > NOTA_MAX) {
            console.log(`${nota}: fuera de rango`)
            return false;
        }
        return true;
    }


    function calcularPromedio(notas) {
        let totalNotas = notas.reduce(nota => {
            return totalNotas += nota
        });
        return totalNotas / notas.length;
    }

    function obtenerCalificacion(promedio) {
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
})

const prompt = require("prompt-sync")();
function esBisiesto(anio) {
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

function diasDelMes(mes, anio) {

    switch (mes) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;

        case 4: case 6: case 9: case 11:
            return 30;

        case 2:
            if (esBisiesto(anio)) {
                return 29;
            } else {
                return 28;
            }

        default:
            return "Mes inválido";
    }
}

let mes = parseInt(prompt("Ingrese el número del mes (1-12):"));
let anio = parseInt(prompt("Ingrese el año:"));

let resultado = diasDelMes(mes, anio);

console.log("El mes tiene:", resultado, "días");
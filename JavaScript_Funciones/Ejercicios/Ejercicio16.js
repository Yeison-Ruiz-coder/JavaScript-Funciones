const prompt = require("prompt-sync")();
function evaluarNumero(numero) {
    if (numero > 0) {
        return "P";
    } else {
        return "N";
    }
}

let num = parseInt(prompt("Ingrese un número entero:"));

let resultado = evaluarNumero(num);

console.log("Resultado:", resultado);
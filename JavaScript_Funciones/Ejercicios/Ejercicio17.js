const prompt = require("prompt-sync")();

function divide(a, b) {
    if (a % b === 0 || b % a === 0) {
        return true;
    } else {
        return false;
    }
}

let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));

let resultado = divide(num1, num2);

console.log("¿Uno divide al otro?:", resultado);
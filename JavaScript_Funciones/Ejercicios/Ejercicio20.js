const prompt = require("prompt-sync")();

function calcularMCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function calcularMCM(a, b) {
    return (a * b) / calcularMCD(a, b);
}

let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));

let mcd = calcularMCD(num1, num2);
let mcm = calcularMCM(num1, num2);

console.log("MCD:", mcd);
console.log("MCM:", mcm);
const prompt = require("prompt-sync")();

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

let num = parseInt(prompt("Ingrese un número entero positivo:"));

if (esPrimo(num)) {
    console.log("El número es primo");
} else {
    console.log("El número no es primo");
}
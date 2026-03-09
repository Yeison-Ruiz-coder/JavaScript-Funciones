const prompt = require("prompt-sync")();

function esPrimo(numero) {

    if (numero <= 2){
        return numero === 2;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}


function main() {

    let numero = parseInt(prompt("Ingrese un número entre 1 y 20: "));
    if (numero < 1 || numero > 20) {
        console.log("Número fuera de rango. Por favor, ingrese un número entre 1 y 20.");
        return;
    }
    if (esPrimo(numero)) {
        console.log(numero + " es un número primo.");
    } else {
        console.log(numero + " no es un número primo.");
    }

}


main();
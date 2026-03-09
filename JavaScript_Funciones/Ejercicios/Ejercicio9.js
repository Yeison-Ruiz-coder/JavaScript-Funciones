const prompt = require("prompt-sync")();

// Función que calcula x^n
function potencia(x, n){
    let resultado = 1;

    for(let i = 1; i <= n; i++){
        resultado = resultado * x;
    }

    return resultado;
}

function main(){
    let x = parseFloat(prompt("Ingrese el valor de x: "));
    let n = parseInt(prompt("Ingrese el valor de n: "));

    let resultado = potencia(x, n);

    console.log("El resultado de x^n es: " + resultado);
}

main();
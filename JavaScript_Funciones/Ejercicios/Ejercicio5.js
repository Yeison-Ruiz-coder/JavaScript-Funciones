const prompt = require("prompt-sync")();

function esValorIntervalo(valor, min, max) {
    if (valor >= min && valor <= max) {
        return true;
    }else{
        return false;
    }
}

function main() {
    let min = parseFloat(prompt("Ingrese un valor minimo: "));
    let max = parseFloat(prompt("Ingrese un valor maximo: "));
    let valor = parseFloat(prompt("Ingrese un valor a evaluar: "));

    if (esValorIntervalo(valor, min, max)) {
        console.log("El valor " + valor + " se encuentra dentro del intervalo [" + min + ", " + max + "].");
    } else {
        console.log("El valor " + valor + " no se encuentra dentro del intervalo [" + min + ", " + max + "].");
    }

}
main();
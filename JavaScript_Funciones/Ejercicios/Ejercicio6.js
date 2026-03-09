const prompt = require("prompt-sync")();

function calcularMediaAritmetica(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

function main() {
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    let num3 = parseFloat(prompt("Ingrese el tercer número: "));

    let media = calcularMediaAritmetica(num1, num2, num3);
    console.log("La media aritmética de los números es: " + media);

}
main();
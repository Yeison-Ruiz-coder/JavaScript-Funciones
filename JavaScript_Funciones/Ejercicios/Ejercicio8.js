const prompt = require("prompt-sync")();

function calcularNumeroMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Los números son iguales";
    }
}

function main() {
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    
    let mayor = calcularNumeroMayor(num1, num2);

    console.log("El número mayor es: " + mayor);
}

main();
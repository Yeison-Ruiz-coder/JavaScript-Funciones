const prompt = require("prompt-sync")();

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

let fahrenheit = celsiusAFahrenheit(celsius);

console.log("Temperatura en Fahrenheit:", fahrenheit);
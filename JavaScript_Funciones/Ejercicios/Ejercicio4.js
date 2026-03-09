const prompt = require("prompt-sync")();

function calcularNotas(nota1, nota2, nota3 , nota4, nota5){
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    return promedio;
}

function main() {
    let nota1 = parseFloat(prompt("Ingrese la primera nota: "));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota: "));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota: "));
    let nota4 = parseFloat(prompt("Ingrese la cuarta nota: "));
    let nota5 = parseFloat(prompt("Ingrese la quinta nota: "));

    let promedio = calcularNotas(nota1, nota2, nota3, nota4, nota5);

    console.log("El promedio es: " + promedio);

    if (promedio < 3.5 && promedio >= 0) {
        console.log("El estudiante ha reprobado.");
        return;
    }

    if (promedio >= 3.5 && promedio < 4.0) {
        console.log("El estudiante ha aprobado con nota mínima.");
        return;
    }

    if (promedio >= 4.0 && promedio <= 5.0) {
        console.log("El estudiante ha aprobado con nota alta.");
        return;
    }

    console.log("Nota inválida, el promedio no puede ser mayor a 5.0");
}

main();
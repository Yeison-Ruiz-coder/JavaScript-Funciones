const prompt = require("prompt-sync")();

// Funciones de área
function areaCirculo(radio){
    return Math.PI * radio * radio;
}

function areaCuadrado(lado){
    return lado * lado;
}

function areaRectangulo(base, altura){
    return base * altura;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function main(){

    console.log("Seleccione la figura geométrica:");
    console.log("1. Círculo");
    console.log("2. Cuadrado");
    console.log("3. Rectángulo");
    console.log("4. Triángulo");

    let opcion = parseInt(prompt("Ingrese una opción: "));

    if(opcion === 1){
        let radio = parseFloat(prompt("Ingrese el radio: "));
        console.log("Área del círculo: " + areaCirculo(radio));
    }

    else if(opcion === 2){
        let lado = parseFloat(prompt("Ingrese el lado: "));
        console.log("Área del cuadrado: " + areaCuadrado(lado));
    }

    else if(opcion === 3){
        let base = parseFloat(prompt("Ingrese la base: "));
        let altura = parseFloat(prompt("Ingrese la altura: "));
        console.log("Área del rectángulo: " + areaRectangulo(base, altura));
    }

    else if(opcion === 4){
        let base = parseFloat(prompt("Ingrese la base: "));
        let altura = parseFloat(prompt("Ingrese la altura: "));
        console.log("Área del triángulo: " + areaTriangulo(base, altura));
    }

    else{
        console.log("Opción inválida");
    }
}

main();
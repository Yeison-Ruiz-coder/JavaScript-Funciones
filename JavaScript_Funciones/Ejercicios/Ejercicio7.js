const prompt = require("prompt-sync")();


function mcd(a, b){
    while(b != 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


function mcdCuatro(a, b, c, d){
    let resultado1 = mcd(a, b);
    let resultado2 = mcd(resultado1, c);
    let resultadoFinal = mcd(resultado2, d);

    return resultadoFinal;
}

function main(){
    let num1 = parseInt(prompt("Ingrese el primer número: "));
    let num2 = parseInt(prompt("Ingrese el segundo número: "));
    let num3 = parseInt(prompt("Ingrese el tercer número: "));
    let num4 = parseInt(prompt("Ingrese el cuarto número: "));

    let resultado = mcdCuatro(num1, num2, num3, num4);

    console.log("El MCD de los cuatro números es: " + resultado);
}

main();
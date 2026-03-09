const prompt = require("prompt-sync")();

function valorAbsoluto(numero){
    if(numero < 0){
        return numero * -1;
    }else{
        return numero;
    }
}

function main(){
    let numero = parseFloat(prompt("Ingrese un número: "));
    
    let resultado = valorAbsoluto(numero);

    console.log("El valor absoluto es: " + resultado);
}

main();
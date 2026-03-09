const prompt = require("prompt-sync")();
const readline = require("readline")


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function calcularAreaHexagono(lado){
    return (3 * Math.sqrt(3) * Math.pow(lado,2)) / 2
}

rl.question("Ingrese el valor del lado del hexágono: ", function(lado) {
    let resultado = calcularAreaHexagono(parseFloat(lado))
    console.log("El área del hexágono es: " + resultado + " cm2")
    rl.close()
})
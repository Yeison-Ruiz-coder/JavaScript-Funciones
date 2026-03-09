const prompt = require("prompt-sync")();

function salario(horas, salarioHora){
    let pago;

    if(horas <= 40){
        pago = horas * salarioHora;
    }else{
        let horasExtra = horas - 40;
        pago = (40 * salarioHora) + (horasExtra * salarioHora * 1.5);
    }

    return pago;
}

function main(){
    let horas = parseFloat(prompt("Ingrese las horas trabajadas: "));
    let salarioHora = parseFloat(prompt("Ingrese el salario por hora: "));

    let total = salario(horas, salarioHora);

    console.log("El salario total es: $" + total);
}

main();
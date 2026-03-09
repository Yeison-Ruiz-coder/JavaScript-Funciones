const prompt = require("prompt-sync")();
function obtenerDia(letra) {
    letra = letra.toLowerCase(); // convertir a minúscula

    switch (letra) {
        case 'l':
            return "Lunes";
        case 'm':
            return "Martes o Miércoles";
        case 'j':
            return "Jueves";
        case 'v':
            return "Viernes";
        case 's':
            return "Sábado";
        case 'd':
            return "Domingo";
        default:
            return "Letra no válida";
    }
}

let letra = prompt("Ingrese la letra inicial del día:");
let dia = obtenerDia(letra);

console.log("El día correspondiente es:", dia);
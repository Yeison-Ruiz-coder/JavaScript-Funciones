const prompt = require("prompt-sync")();

function calcularDescuento(precio) {
    let descuento = 0;

    if (precio > 150000){
        descuento = precio * 0.05;
    }
    return descuento;
}

function main() {
    let precio = parseFloat(prompt("Ingrese el precio del producto: "));
    let descuento = calcularDescuento(precio);
    let precioFinal = precio - descuento;

    console.log("Precio del articulo : " + precio);
    console.log("Descuento aplicado : " + descuento);
    console.log("Precio final : " + precioFinal);
}

main();
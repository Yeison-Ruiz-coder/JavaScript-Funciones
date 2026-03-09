function calcularMedia(numeros) {
    let suma = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    
    return suma / numeros.length;
}

function analizarDatos(numeros) {
    let mayor = numeros[0];
    let menor = numeros[0];
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }

        if (numeros[i] < menor) {
            menor = numeros[i];
        }

        suma += numeros[i];
    }

    let media = calcularMedia(numeros);

    console.log("Valor mayor:", mayor);
    console.log("Valor menor:", menor);
    console.log("Suma:", suma);
    console.log("Media:", media);
}

let datos = [10, 5, 8, 20, 3];

analizarDatos(datos);
[22:15, 19/8/2024] +54 9 3546 40-1991: VERSION 1


let arrayNumeros = [180, 24, 12, 5, 6, 78]

let arrayAuxiliar = []
let arrayAuxiliar1 = []
let arrayOrdenado = []
let numeroMenor = null;

arrayAuxiliar = arrayNumeros;

for (let i = 0; i < arrayNumeros.length; i++) {
    console.log("Array, inicio vuelta", i, arrayAuxiliar)

    arrayAuxiliar.forEach(numero => {
        if (numero < numeroMenor || numeroMenor === null) {
            numeroMenor = numero
        }
    })

    // Agregar numero menor al array ordenado
    console.log("Numero menor encontrado:", numeroMenor)
    arrayOrdenado.push(numeroMenor)
    
    // Actualización del array
    arrayAuxiliar1 = arrayAuxiliar
    arrayAuxiliar = []

    arrayAuxiliar1.forEach(numero => {
        if (numero != numeroMenor) {
            arrayAux…
[22:15, 19/8/2024] +54 9 3546 40-1991: VERSION 2


let arrayNumeros = [180, 24, 12, 1, 5, 6, 78]

let arrayAuxiliar = []
let arrayOrdenado = []
let numeroMenor;

while (arrayNumeros.length > 0) {
    numeroMenor = arrayNumeros[0]
    arrayNumeros.forEach(numero => {
        if (numero < numeroMenor || numeroMenor === null) {
            numeroMenor = numero
        }
    })

    // Actualización del array
    arrayAuxiliar = arrayNumeros
    arrayNumeros = []

    arrayAuxiliar.forEach(numero => {
        if (numero != numeroMenor) {
            arrayNumeros.push(numero)
        }
    })

    // Agregar numero menor al array ordenado
    arrayOrdenado.push(numeroMenor)
}

console.log(arrayOrdenado)

//version III
const nros = [60, 45, 21, 87, 57, 98, 32];

for (let i = 0; i < nros.length - 1; i++) {
    for (let j = 0; j < nros.length; j++) {
        let aux = null;
        if (nros[j] >= nros[j + 1]) {
            aux = nros[j];
            nros[j] = nros[j + 1];
            nros[j + 1] = aux;
        }
    }
}

document.getElementById("resultado").innerHTML = nros;
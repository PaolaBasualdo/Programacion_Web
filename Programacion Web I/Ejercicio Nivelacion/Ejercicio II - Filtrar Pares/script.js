/*Escribe una función que reciba un array de números y devuelva un nuevo array
con solo los números pares. Muestra el array resultante en un elemento HTML.*/
/*RESOLUCION 1:
const array = [1, 2, 3, 4, 5, 6];
function filtrarPares(array) {
    let pares = [];
    for (i = 0; i < array.length; i+=1) {
        if (array[i] % 2 === 0) {
            pares.push(array[i]);
        }
    }
    return pares;
}

const numerosPares = filtrarPares(array);

document.getElementById('numerosPares').innerHTML = 'Los números pares son: ' + numerosPares.join(', ');
*/
//RESOLUCION 2:
/*const array = [1, 2, 3, 4, 5, 6];
let filtrarPares = (array) => {
    let pares = [];
    array.forEach( (elemento) => {
        if (elemento % 2 === 0) {
            pares.push(elemento);
        }})
        return pares;
}

const numerosPares = filtrarPares(array);

document.getElementById('numerosPares').innerHTML = 'Los números pares son: ' + numerosPares;
*/
//RESOLUCION 3:
const arrayNumeros = [1, 2, 3, 4, 5, 6];
let filtrarPares = (array) => {
    let pares = [];
    array.filter( (numero) => {
        if (numero % 2 === 0) {
            pares.push(numero);
        }})
        return pares;
}

const numerosPares = filtrarPares(arrayNumeros);

document.getElementById('numerosPares').innerHTML = 'Los números pares son: ' + numerosPares;


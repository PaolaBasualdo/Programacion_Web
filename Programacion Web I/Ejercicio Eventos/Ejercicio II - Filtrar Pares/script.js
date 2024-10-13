import { arrayAleatorio } from '../arrayAleatorio.js';
import { filtrarPares } from '../filtrarPares.js';
/*Escribe una función que reciba un array de números y devuelva un nuevo array
con solo los números pares. Muestra el array resultante en un elemento HTML.*/

const array = arrayAleatorio(10);
document.getElementById('array').innerHTML = `array = {${array}}`
function mostrarPares() {
    const numerosPares = filtrarPares(array); 
    document.getElementById('numerosPares').innerHTML = 'Los números pares son: ' + numerosPares;
};
window.mostrarPares = mostrarPares;
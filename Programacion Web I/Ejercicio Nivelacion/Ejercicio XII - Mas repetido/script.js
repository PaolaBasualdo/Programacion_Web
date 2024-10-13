/*BUSCA EL ELEMENTO MÁS FRECUENTE. 
Escribe una función que encuentre el elemento que más se repite en un array.  Muestra el resultado en un elemento HTML. */
/*import {numMayor} from './script2.js'

let array = [ 1, 2, 5, 6, 6, 8, 10, 10];
let contador = {}; //creo un objeto vacio

function contadorFrecuencia (array) {
    array.forEach (clave =>{
        if (contador[clave]){
            contador[clave]++
        }
        else {contador[clave]=1}
        });
    let valores = Object.values(contador)   
    return valores
    }


let resultado = numMayor(contadorFrecuencia(array));
document.getElementById('resultado').innerHTML = `${resultado}`*/
/*import { numMayor } from './script2.js';*/

let array = [1, 2, 5, 6, 6, 8, 10, 10];
let contador = {}; // Creo un objeto vacío

function contadorFrecuencia(array) {
    array.forEach(clave => {
        if (contador[clave]) {
            contador[clave]++;
        } else {
            contador[clave] = 1;
        }
    });
    let valores = Object.values(contador);
    return valores;
}


function numMayor(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}



let resultado = numMayor(contadorFrecuencia(array));
document.getElementById('resultado').innerHTML = `${resultado}`;



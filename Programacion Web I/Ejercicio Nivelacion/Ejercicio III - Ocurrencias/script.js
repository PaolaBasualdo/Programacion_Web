/*Crea una función que tome un array de strings y un string de búsqueda, y
devuelva el número de veces que el string de búsqueda aparece en el array.
Muestra el resultado en un elemento HTML.
*/
const string = ["rojo", "azul", "verde", "rojo"];
const repetido = "rojo";
 function ocurrencias(array, busqueda) {
    let contador = 0;
    for (i = 0; i < array.length; i+=1) {
        if (array[i] === busqueda) {
            contador++;
        }
    }
    return contador;
}

const resultado = ocurrencias(string, repetido);
document.getElementById('resultado').innerHTML = `El string "<strong>${repetido}</strong>" aparece <strong>${resultado}</strong> veces en el array.`;
//document.getElementById('resultado').textContent = `El string "${repetido}" aparece ${resultado} veces en el array.`;

//EJERCICIO III

// ---- INICIO ALGORITMO ---- //

// Entrada
let arrayStrings = ['remera', 'camisa', 'bermuda', 'remera', 'jeans', 'camisa', 'jeans', 'remera', 'jeans', 'remera', 'jeans', 'remera', 'jeans', 'pantalon']

let buscar = 'camisa'

// Procesamiento
function obtenerOcurrencias(array, clave) {
    let ocurrencias = 0;

    array.forEach(item => {

        if (item === clave) {

            ocurrencias++;

        }

    })

    return ocurrencias;
}

let ocurrencias = obtenerOcurrencias(array=arrayStrings, clave=buscar)

// Salida
let palabraSalida = document.getElementById("palabra")
let ocurrenciasSalida = document.getElementById("ocurrencias")

palabraSalida.innerHTML = buscar
ocurrenciasSalida.innerHTML = ocurrencias//
/*Crea una función que tome un array de strings y un string de búsqueda, y
devuelva el número de veces que el string de búsqueda aparece en el array.
Muestra el resultado en un elemento HTML.
*/
const string = ["rojo", "azul", "verde", "rojo", "violeta"];
const repetido = "rojo";

document.getElementById('string').innerHTML = `Cadena de texto = [${string}]`; 
document.getElementById('repetido').innerHTML = `Contar cuantas veces aparece "<strong>${repetido}</strong>" en la cadena de texto`;

function ocurrencias(array, busqueda) {
    let contador =0;
    for (i = 0; i < array.length; i++) {
        if (array[i] === busqueda) {
            contador++;
            
        }
    }
    return contador;
}

function contarRepetido(){
    let ocurrencia = ocurrencias(string, repetido);
    document.getElementById('ocurrencia').innerHTML = `El string "<strong>${repetido}</strong>" aparece <strong>${ocurrencia}</strong> veces en la cadena de texto.`;
}
/*ORDENAR NÚMEROS.
Escribe una función que reciba un array de números y los ordene de forma
ascendente. Muestra el resultado en un elemento HTML.*/
//RESOLUCION 1: 
/*const numeros = [1, 8, 20, 3, 7];
function ordenarAscendente (array) {
    let ordenado = array.sort((a, b) => a - b);
    return ordenado;
}
const resultado = ordenarAscendente(numeros);

document.getElementById('resultado').innerHTML = "<strong>El array ordenado es:</strong> <br>" + resultado;
*/
//RESOLUCION 2:
/*const numeros = [1, 8, 20, 3, 7];
function ordenarAscendente (array){
    for (let i = 0; i <= array.length-1; i++){


    }
}*/

let arrayNumeros = [1, 24, 12, 5, 6, 78]
let arrayAuxiliar =[]
let arrayOrdenado =[]
let numeroMenor = null ;
arrayAuxiliar = arrayNumero
for (let i =0; i<arrayNumeros.length; i++){
    arrayNumeros.forEach(numero =>{
    if(numero<numeroMenor || numeroMenor === null){
        numeroMenor=numero
    }
})

arrayOrdenado.push(numeroMenor)
arrayNumeros.forEach(numero =>){
    if (numero != numeroMenor){
        arrayAuxiliar.push(numero)
    }
}
numeroMenor = null
}


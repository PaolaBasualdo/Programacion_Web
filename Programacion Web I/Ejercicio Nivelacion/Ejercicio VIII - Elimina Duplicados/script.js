/*Crea una función que tome un array de números y elimine los elementos  duplicados. Muestra el array resultante en un elemento HTML. */
//RESOLUCION I
//let arrayNumeros = [ 1, 2, 5, 6, 6, 8, 10, 10];
/*let unicos = []; 
function eliminaDuplicado (array){
    array.forEach(num => {

        if (!(unicos.includes(num))) {
unicos.push(num)
        } }); 
        return unicos}       
  
resultado = eliminaDuplicado(arrayNumeros);
document.getElementById('resultado').innerHTML = `${resultado}`*/

//RESOLUCION II
/*let array = [ 1, 2, 5, 6, 6, 8, 10, 10];
let unicos = []; // creo un array vacio
let objetoContador = {}; //creo un objeto vacio

function eliminaDuplicado (array) {
    array.forEach (clave =>{
        if (objetoContador[clave]){//si el valor de la clave existe le suma 1, es decir si el numero del array pasa a ser una clave le suma la frecuencia de aparicion
            objetoContador[clave]++
        }
        else {objetoContador[clave]=1}
        });
    for (let clave in objetoContador) {//itera sobre el objeto
            unicos.push(Number(clave))// las claves en los objetos son string Number(clave) lo convierte a numero
        };
    return unicos;
    }
resultado = eliminaDuplicado(array);
document.getElementById('resultado').innerHTML = `${resultado}`
    */
/*for...in: Itera sobre las claves del objeto.
Object.keys(objetoContador): Itera sobre las claves como un array.
Object.values(objetoContador): Itera sobre los valores del objeto.
Object.entries(objetoContador): Itera sobre los pares [clave, valor].*/

//RESOLUCION III (EN CLASE -COMPANERO)
/*let array = [1, 2, 5, 6, 6, 8, 10, 10];
let unicos = [];

function eliminaDuplicado(array) {
    for (let i = 0; i < array.length; i++) {
        let repetidos = false;
        for (let j = 0; j < unicos.length; j++) {
            if (array[i] === unicos[j]) {
                repetidos = true;
                break; // Rompe el bucle si se encuentra un duplicado
            }
        }
        if (repetidos === false) {
            unicos.push(array[i]);
        }
    }
    return unicos;
}

let resultado = eliminaDuplicado(array);
document.getElementById('resultado').innerHTML = `${resultado}`;*/

//RESOLUCION IV
/*let array = [1, 2, 5, 6, 6, 8, 10, 10];
let unicos = [];

function eliminaDuplicado(array) {
    array.forEach(item => {
        let repetidos = false;
        unicos.forEach(unico =>{
            if (item === unico) {
                repetidos = true;
            }
        })
        if (repetidos === false) {
            unicos.push(item);
        }
    })
    return unicos;
}

let resultado = eliminaDuplicado(array);
document.getElementById('resultado').innerHTML = `${resultado}`;*/

//RESOLUCION V (PROFESOR)
let arrayNumeros = [1, 2, 5, 6, 6, 8, 10, 10];
function obtenerUnicos(array){  
    let unicos = [];
    let existe;//booleana true o false
    array.forEach (numero =>{  //cada uno de los elementos del array 
        existe = unicos.find(unico => unico === numero) //buscamos en el array unicos uno que sea igual a numero
        if (existe === undefined) {
            unicos.push(numero);
    }
})
    return unicos
}
let resultado = obtenerUnicos(arrayNumeros);
document.getElementById('resultado').innerHTML = `${resultado}`;

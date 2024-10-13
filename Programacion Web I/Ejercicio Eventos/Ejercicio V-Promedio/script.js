/*CALCULAR PROMEDIO.
Crea una función que tome un array de números y devuelva el promedio de estos.
Muestra el resultado en un elemento HTML.*/
const numeros = [1, 2, 3 ];
let calcularPromedio = (array)=>{
    let suma = 0;
     
    array.forEach((elemento) => {
        suma += elemento;
        })

    return  suma/array.length;
}

const resultado = calcularPromedio(numeros);

document.getElementById('resultado').innerHTML = '<strong>${El promedio de los elementos del array es:</strong> ' + resultado ;
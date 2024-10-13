/*Crea una funcion que tome un array de numeros y devuelva la suma de todos sus elementos . Luego muestre el resutado en un elemento HTML*/
/*RESOLUCION 1:
const array = [1, 2 ];
function sumarArray(array) {
    let suma = 0;
    for(i = 0; i < array.length; i+=1) {
        suma += array[i];
    }
    return suma;
}

const resultado = sumarArray(array);

document.getElementById('resultado').innerHTML = 'La suma de los elementos es: <strong>' + resultado + '</strong>';*/
//document.getElementById('resultado'): Aquí estamos utilizando el método getElementById() para encontrar y seleccionar el div con el id que hemos definido como "resultado" en el HTML. Este método le dice al navegador: "Oye, encuentra el elemento que tiene el id 'resultado'".Una vez que el div con id="resultado" ha sido seleccionado, usamos innerHTML para cambiar el contenido dentro de ese div. innerHTML permite insertar código HTML y texto dentro de un elemento. //
//RESOLUCION 2:
const array = [1, 2, 3 ];
let sumarArray = (array)=>{
    let suma = 0;
    array.forEach((elemento) => {
        suma += elemento;
    })
    return suma;
}

const resultado = sumarArray(array);

document.getElementById('resultado').innerHTML = '<strong>La suma de los elementos es:</strong> ' + resultado ;
/* Los eventos de JavaScript permiten la interacción entre las aplicacionesJavaScript y los
usuarios. Cada vez que se pulsa un botón, se produce un evento. Cada vez que se pulsa una tecla,
también se produce un evento. No obstante, para que se produzca un evento no es obligatorio que
intervenga el usuario, ya que, por ejemplo, cada vez que se carga una página, también se produce un
evento.


/*Crea una funcion que tome un array de numeros y devuelva la suma de todos sus elementos . Luego muestre el resutado en un elemento HTML*/


let array = [];

function agregaNumero(){
    const numeroIngresado = parseInt(document.getElementById('inputNumero').value);
    if (!isNaN(numeroIngresado)) {  
        array.push(numeroIngresado);
    }else {
        console.log("Por favor, ingresa un número válido");
    }
    
    document.getElementById('array').innerText = 'array: ' + '{' + array +'}';
    document.getElementById('inputNumero').value = '';

    return array;
}


let sumarArray = (array)=>{
    let suma = 0;
    array.forEach((elemento) => {
        suma += elemento;
    })
    return suma;  
}

function sumarElementos(){
    const resultado = sumarArray(array);
    document.getElementById('resultado').innerHTML= `La sumatoria de los elementos del array es ${resultado}`
}



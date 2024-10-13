
/*Crea una función que genere una contraseña aleatoria de una longitud
especificada por el usuario, incluyendo letras mayúsculas, minúsculas, números y
símbolos.
Muestra el resultado en un elemento HTML.*/


let caracteres = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'
];
let password=[];

function generar(array){
    let long = parseInt(prompt("Ingrese la longitud del pasword: "));  
     i=0
    while (i< long) {
       
        let indice = Math.floor(Math.random()*array.length); 
        password.push(array[indice]);
        i++}
    
    let passwordCadena = password.join('');
        
    return passwordCadena}

let resultado = generar(caracteres);
document.getElementById('resultado').innerHTML = `Password = ${resultado}`




        

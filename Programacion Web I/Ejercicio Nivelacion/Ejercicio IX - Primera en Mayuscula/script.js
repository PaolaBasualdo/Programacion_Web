/*Escribe una función que reciba una cadena de texto y devuelva la misma cadena  con la primera letra de cada palabra en mayúscula. Muestra el resultado en un  elemento HTML.  */

let palabras = 'hoy puede ser un gran dia';
  let mayuscula = [];

function primeraMayuscula (cadena){    
    let arrayTexto = cadena.split(' ');    
    for(let i =0; i< arrayTexto.length; i++){
        let primeraLetra = arrayTexto[i].charAt(0).toUpperCase();
        let palabra = primeraLetra + arrayTexto[i].slice(1).toLowerCase();
        mayuscula.push(palabra);   
          }
     return mayuscula.join(' ')
    } 
            
  
resultado = primeraMayuscula(palabras);
document.getElementById('resultado').innerHTML = `${resultado}`
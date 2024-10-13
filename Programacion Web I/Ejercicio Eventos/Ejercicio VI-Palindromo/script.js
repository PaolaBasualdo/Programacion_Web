/*VERIFICAR PALÍNDROMO.
Crea una función que verifique si una palabra es un palíndromo (se lee igual de
adelante hacia atrás). Muestra el resultado en un elemento HTML.
*/
//RESOLUCION I
/*let palabra = prompt("Ingrese una palabra: ")
function verificaPalindromo(palabra) {
   let invertida = palabra.split("").reverse().join("");
   let mensaje = palabra === invertida ? "Es palindromo": "No es palindromo";
   return mensaje;
}
const resultado = verificaPalindromo(palabra);

document.getElementById('resultado').innerHTML = `<strong>${palabra.toUpperCase()}</strong> <br> ${resultado}`;*/

//RESOLUCION II:
let palabra = prompt("Ingrese una palabra: ");

function verificaPalindromo(palabra){
   let invertida = "";
   for (let i = 1 ; i <= palabra.length; i++){
   invertida += palabra [palabra.length-i];
   }
   let mensaje = palabra === invertida ? "Es palindromo": "No es palindromo";
   return mensaje;
}

const resultado = verificaPalindromo(palabra);

document.getElementById('resultado').innerHTML = `<strong>${palabra.toUpperCase()}</strong> <br> ${resultado}`;
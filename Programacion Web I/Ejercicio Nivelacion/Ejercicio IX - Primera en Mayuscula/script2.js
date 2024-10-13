/*let cadenaTexto = 'hoy puede ser un gran dia';
  let mayuscula = [];

let arrayTexto = cadenaTexto.split(' ');
console.log(arrayTexto);
arrayTexto.forEach(palabra => {
}*/

let palabras = ["MARAVILLOSO", "mundo"];
let primerPalabra = palabras[0];

for(let i =0; i< palabras.length; i++){
  let primeraLetra = palabras[i].charAt(0).toUpperCase();
  let palabra = primeraLetra + palabras[i].slice(1).toLowerCase();
  console.log(palabra);
}
/*CONVERTIR TEMPERATURA. 
Convertir Temperatura: Crea una función que convierta grados Celsius a  Fahrenheit y viceversa. Muestra el resultado en un elemento HTML. 
*/
alert("Indique la temperatura");
let numero = parseInt(prompt("Numero: "));
let unidad = prompt ("Indica F si son grados Fahrenheit o C sin son grados Celsius: ").toUpperCase()
let temp;
let mensaje;


function conversor(numero, unidad){
    
    if (unidad === "C"){
        temp =(numero * 9/5)+32;
        mensaje = `${numero} grados Celcius son ${temp} grados Fahrenheit`
    }
    else if (unidad === "F"){
        temp = (numero-32)*5/9;
        mensaje = `${numero} grados Fahrenheit son ${temp} grados Celcius `
    }
    else {mensaje = "Unidad no válida. Por favor ingresa 'C' o 'F'.";
    }
    return mensaje}
           
let resultado = conversor(numero, unidad);
document.getElementById('resultado').innerHTML = resultado;


 
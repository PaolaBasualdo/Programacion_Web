
/*VALIDAR CORREO ELECTRÓNICO.

Desarrolla una función que valide si una cadena de texto es una dirección de
correo electrónico válida. Muestra el resultado en un elemento HTML.*/
let mail = prompt("Ingrese su direccion de mail: ");
let arrayMail = mail.split('');
let mensaje= "La direccion No es valida";
arrayMail.forEach((caracter) => {
    if (caracter ==="@"){
        mensaje = 'La direccion es valida'
    }      
})





let resultado = mensaje;
document.getElementById('resultado').innerHTML = `${resultado}`;



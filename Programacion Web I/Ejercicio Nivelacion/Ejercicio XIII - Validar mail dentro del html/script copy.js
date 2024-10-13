
/*VALIDAR CORREO ELECTRÓNICO.

Desarrolla una función que valide si una cadena de texto es una dirección de
correo electrónico válida. Muestra el resultado en un elemento HTML.*/
document.getElementById('validar').addEventListener('click', function() {
    let mail = document.getElementById('email').value; // Obtiene el valor del campo de entrada
    let mensaje = "La direccion No es valida";
    if ((mail.includes('.com') || mail.includes('.edu')) && mail.include ("@")) {
        mensaje = "La direccion es valida"}
     
    let resultado = mensaje;
    document.getElementById('resultado').innerHTML = `${resultado}`;
});





let resultado = mensaje;
document.getElementById('resultado').innerHTML = `${resultado}`;



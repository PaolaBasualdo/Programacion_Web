/*Crea una lista de objetos tipo JSON que representen a varios usuarios (nombre,
edad, email). Escribe una función que reciba esta lista y devuelva una lista de
emails de los usuarios mayores de edad. Muestra el resultado en un elemento
HTML.
const usuarios = [ { nombre: "Juan", edad: 25, email: "juan@example.com" }, {
nombre: "María", edad: 17, email: "maria@example.com" }, { nombre: "Pedro",
edad: 30, email: "pedro@example.com" } ];*/
const usuarios = [
    { nombre: "Sofia", apellido: "Heredia", edad: 25, email: "sofi@issr.edu" },
    { nombre: "Paola", apellido: "Basualdo", edad: 50, email: "pao@issr.edu" },
    { nombre: "Yazmin", apellido: "Juarez", edad: 17, email: "yaz@issr.edu" },
    { nombre: "Daniel", apellido: "Cuda", edad: 28, email: "dani@issr.edu" }
];

function emailsMayores(usuarios) {
    var emails = [];
    usuarios.forEach(usuario => {
        if (usuario.edad >= 18) {
            emails.push(usuario.email);
        }
    });
    return emails;
}

var emailsDeMayores = emailsMayores(usuarios);


document.getElementById("emailsMayores").innerHTML = "<strong>Emails de los usuarios mayores de edad:</strong> <br>" + emailsDeMayores.join("<br>");
//Toma el array emailsDeMayores y lo convierte en una única cadena de texto. Cada elemento del array es separado por la etiqueta HTML <br>, que se usa para saltos de línea en HTML.



   
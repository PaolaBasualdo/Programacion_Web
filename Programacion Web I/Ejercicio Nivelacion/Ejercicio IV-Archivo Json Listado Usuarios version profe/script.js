/*Crea una lista de objetos tipo JSON que representen a varios usuarios (nombre,
edad, email). Escribe una función que reciba esta lista y devuelva una lista de
emails de los usuarios mayores de edad. Muestra el resultado en un elemento
HTML.
const usuarios = [ { nombre: "Juan", edad: 25, email: "juan@example.com" }, {
nombre: "María", edad: 17, email: "maria@example.com" }, { nombre: "Pedro",
edad: 30, email: "pedro@example.com" } ];*/

//RESOLUCION 1:
/*function crearListado(array) {
    var listado = [];
    array.forEach(elemento => {
        let texto = `${elemento.nombre} ${elemento.apellido}, ${elemento.edad} años, email: ${elemento.email}`;
        listado.push(texto);         
    });
    return listado;
}

let resultado = crearListado(usuarios);


document.getElementById("resultado").innerHTML = "Listado de Usuarios: <br>" + resultado.join("<br>");
*/
const usuarios = [
    { nombre: "Sofia", apellido: "Heredia", edad: 25, email: "sofi@issr.edu" },
    { nombre: "Paola", apellido: "Basualdo", edad: 50, email: "pao@issr.edu" },
    { nombre: "Yazmin", apellido: "Juarez", edad: 17, email: "yaz@issr.edu" },
    { nombre: "Daniel", apellido: "Cuda", edad: 28, email: "dani@issr.edu" }
];
const tablaUsuario = document.getElementById("tablaUsuarios");
//htmlString = ""
usuarios.forEach(usuario => {
    tablaUsuario.innerHTML +=`
    <tr>
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
        <td>${usuario.edad}</td>
        <td>${usuario.email}</td>
    </tr>

    `
})
const tablaEmails = document.getElementById("tablaEmails");

usuarios.forEach(usuario => {
    if (usuario.edad >= 18) {
        tablaEmails.innerHTML += `
            <tr>
                <td>${usuario.email}</td>
            </tr>
        `;
    }
});



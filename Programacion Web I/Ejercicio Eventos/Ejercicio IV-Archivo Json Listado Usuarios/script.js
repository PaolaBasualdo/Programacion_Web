/*Realizar un formulario HTML con 3 campos de texto (input), un botón y una tabla.

En los <input> se ingresará "nombre", "email" y "edad" de un usuario. 
Al hacer click en el <button> (eventListener) se debe ejecutar una función que agregue una fila en la <table> con la información ingresada, y finalmente "limpiar" los input para poder ingresar otro usuario.
*/
const usuarios = [
    { nombre: "Sofia", apellido: "Heredia", edad: 25, email: "sofi@issr.edu" },
    { nombre: "Paola", apellido: "Basualdo", edad: 50, email: "pao@issr.edu" },
    { nombre: "Yazmin", apellido: "Juarez", edad: 17, email: "yaz@issr.edu" },
    { nombre: "Daniel", apellido: "Cuda", edad: 28, email: "dani@issr.edu" }
];
//RESOLUCION 1:
function crearListado(array) {
    var listado = [];
    array.forEach(elemento => {
        let texto = `${elemento.nombre} ${elemento.apellido}, ${elemento.edad} años, email: ${elemento.email}`;
        listado.push(texto);         
    });
    return listado;
}

let resultado = crearListado(usuarios);


document.getElementById("resultado").innerHTML = "Listado de Usuarios: <br>" + resultado.join("<br>");




/*Realizar un formulario HTML con 3 campos de texto (input), un botón y una tabla. En los <input> se ingresará "nombre", "email" y "edad" de un usuario. 
Al hacer click en el <button> (eventListener) se debe ejecutar una función que agregue una fila en la <table> con la información ingresada, y finalmente "limpiar" los input para poder ingresar otro usuario.*/
import { rellenarTabla } from './rellenarTabla.js';
import { vaciarTabla } from './vaciarTabla.js';
import {botonEliminar} from './botonEliminar.js';

const usuarios = [
    { nombre: "Sofia", apellido: "Heredia", edad: 25, email: "sofi@issr.edu" },
    { nombre: "Paola", apellido: "Basualdo", edad: 50, email: "pao@issr.edu" },
    { nombre: "Yazmin", apellido: "Juarez", edad: 17, email: "yaz@issr.edu" },
    { nombre: "Daniel", apellido: "Cuda", edad: 28, email: "dani@issr.edu" }
];
rellenarTabla(usuarios);
document.getElementById('agregar').addEventListener('click', function() {
    let nombre = document.getElementById('inputNombre').value;
    let apellido = document.getElementById('inputApellido').value;
    let edad = document.getElementById('inputEdad').value;
    let email = document.getElementById('inputEmail').value;
    let usuario ={
        nombre: nombre,
        apellido: apellido, 
        edad: edad,
        email:email,
    }
    usuarios.push(usuario);
    vaciarTabla(usuarios);
    rellenarTabla(usuarios);
    document.getElementById('inputNombre').value = '';
    document.getElementById('inputApellido').value = '';
    document.getElementById('inputEdad').value = '';
    document.getElementById('inputEmail').value = '';

})



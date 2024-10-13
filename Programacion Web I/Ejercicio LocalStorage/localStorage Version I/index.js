import { rellenarTabla } from './rellenarTabla.js';
import { vaciarTabla } from './vaciarTabla.js';
import { asignarEventosEliminar } from './rellenarTabla.js';

// Cargar usuarios desde localStorage al iniciar
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
    { nombre: "Sofia", apellido: "Heredia", edad: 25, email: "sofi@issr.edu" },
    { nombre: "Paola", apellido: "Basualdo", edad: 50, email: "pao@issr.edu" },
    { nombre: "Yazmin", apellido: "Juarez", edad: 17, email: "yaz@issr.edu" },
    { nombre: "Daniel", apellido: "Cuda", edad: 28, email: "dani@issr.edu" }
];

// Si usuarios está vacío (es decir, no había nada en localStorage), lo guardamos
if (!localStorage.getItem('usuarios')) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Inicializar la tabla con los usuarios
rellenarTabla(usuarios);
asignarEventosEliminar(usuarios); // Llamar a esta función después de rellenar la tabla

// Evento para agregar un usuario
document.getElementById('agregar').addEventListener('click', function() {
    let nombre = document.getElementById('inputNombre').value;
    let apellido = document.getElementById('inputApellido').value;
    let edad = document.getElementById('inputEdad').value;
    let email = document.getElementById('inputEmail').value;

    let usuario = {
        nombre: nombre,
        apellido: apellido, 
        edad: edad,
        email: email,
    };

    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Guardar en localStorage

    vaciarTabla(); // Vaciar tabla antes de rellenarla
    rellenarTabla(usuarios); // Rellenar tabla actualizada
    asignarEventosEliminar(usuarios); // Reasignar eventos tras actualizar la tabla

    // Limpiar campos del formulario
    document.getElementById('inputNombre').value = '';
    document.getElementById('inputApellido').value = '';
    document.getElementById('inputEdad').value = '';
    document.getElementById('inputEmail').value = '';
});

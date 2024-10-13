import { vaciarTabla } from "./vaciarTabla";

export function rellenarTabla(usuarios) {
    const tablaUsuario = document.getElementById("tablaUsuarios");
    
    // Vaciar la tabla antes de rellenarla
    vaciarTabla();

    usuarios.forEach((usuario, index) => {
        tablaUsuario.innerHTML += `
        <tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.edad}</td>
            <td>${usuario.email}</td>
            <td><button class="eliminar" data-index="${index}">Eliminar</button></td> 
        </tr>
        `;
    });
}

export function asignarEventosEliminar(usuarios) {
    // Asignar los eventos a los botones de eliminar, una vez que la tabla ha sido creada
    document.querySelectorAll('.eliminar').forEach(boton => {
        boton.addEventListener('click', function() {
            let index = boton.getAttribute('data-index'); // Obtener el índice del botón
            usuarios.splice(index, 1); // Eliminar el usuario del array

            localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Actualizar localStorage
            
            vaciarTabla(); // Vaciar la tabla
            rellenarTabla(usuarios); // Rellenar la tabla actualizada
            asignarEventosEliminar(usuarios); // Reasignar los eventos tras la actualización
        });
    });
}

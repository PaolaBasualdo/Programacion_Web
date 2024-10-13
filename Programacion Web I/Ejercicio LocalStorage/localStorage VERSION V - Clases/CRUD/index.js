import Usuario from "./clases/Usuario.js" 

// Cargar usuarios desde localStorage en usuariosGlobal como instancias de Usuario
const usuariosGlobal = [];

// Cargar usuarios del localStorage y convertirlos en instancias de Usuario
const usuariosGuardados = JSON.parse(localStorage.getItem("users")) || [];
for (let i = 0; i < usuariosGuardados.length; i++) {
    const user = usuariosGuardados[i];
    const usuario = new Usuario(user.nombre, user.email, user.edad);
    usuariosGlobal.push(usuario);
};

usuariosGuardados.forEach 

function updateTablaUsuarios() { 
    const tablaUsuarios = document.getElementById("tablaUsuarios");
    tablaUsuarios.innerHTML = "";

    // Utilizar el array global para renderizar
    usuariosGlobal.forEach(user => { 
      tablaUsuarios.innerHTML += `
        <tr>
          <td>${user.nombre}</td>
          <td>${user.email}</td>
          <td>${user.edad}</td>
          <td><button class="eliminar">Eliminar</button></td>
          <td><button class="editar">Editar</button></td>
        </tr>
      `;
    });
}

updateTablaUsuarios();

document.getElementById("guardar").addEventListener("click", (event) => {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let edad = document.getElementById("edad").value;
    let emailEnEdicion = document.getElementById("email").getAttribute("data-en-edicion");

    if (emailEnEdicion) { 
      // Editar un usuario
      for (let i = 0; i < usuariosGlobal.length; i++) {
        if (usuariosGlobal[i].email === emailEnEdicion) {
          usuariosGlobal[i].nombre = nombre;
          usuariosGlobal[i].edad = edad;
          break; 
        }
      }
      document.getElementById("email").removeAttribute("data-en-edicion");
    } else { 
      // Verificar si el usuario ya existe
      for (let i = 0; i < usuariosGlobal.length; i++) {
        if (usuariosGlobal[i].email === email) { 
          alert("El usuario ya existe");
          return; 
        }
      }
      // Crear y agregar el nuevo usuario
      const usuario = Usuario.crear(nombre, email, edad);
      usuariosGlobal.push(usuario);
    }

    console.log(usuariosGlobal)

    // Actualizar localStorage con el array global
    localStorage.setItem("users", JSON.stringify(usuariosGlobal));

    // Actualizar la tabla
    updateTablaUsuarios();

    // Limpiar los campos
    document.getElementById("nombre").value = '';
    document.getElementById("email").value = '';
    document.getElementById("edad").value = '';   
});
// Capturar eventos en la tabla de usuarios
document.getElementById("tablaUsuarios").addEventListener("click", (event) => {
  const button = event.target; // Guardar el elemento que disparó el evento (el botón)
  const row = button.parentNode.parentNode; // Acceder a la fila (tr) del botón
  const mail = row.cells[1].textContent; // Obtener el email de la segunda celda de la fila

  if (button.className === "eliminar") {
    // Si el botón tiene la clase "eliminar", procedemos a borrar el usuario
    row.remove(); // Eliminar la fila de la tabla

    // Filtrar usuarios para eliminar del array `usuariosGlobal`
    const nuevosUsuarios = usuariosGlobal.filter(user => user.email !== mail);

    // Actualizar el array `usuariosGlobal` y el `localStorage`
    usuariosGlobal.length = 0; // Vaciar el array original elementos del array usuariosGlobal, pero sin crear un nuevo array ni perder la referencia origina
    
    nuevosUsuarios.forEach(usuario => {
      usuariosGlobal.push(usuario);
  }); // Rellenar con los usuarios restantes
    
  localStorage.setItem("users", JSON.stringify(usuariosGlobal)); // Actualizar localStorage

    updateTablaUsuarios(); // Renderizar la tabla nuevamente

  } else if (button.className === "editar") {
    // Si el botón tiene la clase "editar", se activa la edición
    document.getElementById("nombre").value = row.cells[0].textContent;
    document.getElementById("email").value = row.cells[1].textContent;
    document.getElementById("edad").value = row.cells[2].textContent;

    // Asignar el atributo `data-en-edicion` con el email del usuario a editar
    document.getElementById("email").setAttribute("data-en-edicion", mail);
  }
});
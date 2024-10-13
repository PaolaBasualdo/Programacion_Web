//carga los usuarios los obtiene del localstorage, como estan e formato JSON los convierte a objeto y si el local storage esta vacio crea un array vacio 
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

function rellenarTabla() {
  const tablaUsuario = document.getElementById("tablaUsuarios").getElementsByTagName('tbody')[0];
  tablaUsuario.innerHTML = ''; 

  usuarios.forEach((usuario, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${usuario.nombre}</td>
      <td>${usuario.apellido}</td>
      <td>${usuario.edad}</td>
      <td>${usuario.email}</td>
      <td><button class="eliminar" data-index="${index}">Eliminar</button></td>
    `;
    tablaUsuario.appendChild(fila);
  });

  
  document.querySelectorAll('.eliminar').forEach(boton => {
    boton.addEventListener('click', function() {
      let index = this.getAttribute('data-index');
      eliminarUsuario(index);
    });
  });
}


document.getElementById('agregar').addEventListener('click', function() {
  let nombre = document.getElementById('inputNombre').value;
  let apellido = document.getElementById('inputApellido').value;
  let edad = document.getElementById('inputEdad').value;
  let email = document.getElementById('inputEmail').value;

  
  let usuario = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    email: email
  };

  
  usuarios.push(usuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  
  document.getElementById('inputNombre').value = '';
  document.getElementById('inputApellido').value = '';
  document.getElementById('inputEdad').value = '';
  document.getElementById('inputEmail').value = '';

  
  rellenarTabla();
});


function eliminarUsuario(index) {
  usuarios.splice(index, 1); // Eliminar del array
  localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Actualizar localStorage
  rellenarTabla(); 
}


rellenarTabla();

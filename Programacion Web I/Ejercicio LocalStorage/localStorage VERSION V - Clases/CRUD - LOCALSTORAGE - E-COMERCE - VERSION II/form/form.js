import Producto from "../clases/Producto.js";

function completarTabla() { 
    const tablaProductos = document.getElementById("tablaProductos");
    tablaProductos.innerHTML = "";
    Producto.mostrarArray().forEach(producto => { 
      tablaProductos.innerHTML += `
        <tr>
          <td>${producto.codigo}</td>
          <td>${producto.nombre}</td>
          <td>${producto.precio}</td>
          <td>${producto.descripcion}</td>
          <td><img src="${producto.imagen}" alt="Imagen del producto" width="50" /></td>
          <td><button class="eliminar">Eliminar</button></td>
          <td><button class="editar">Editar</button></td>
        </tr>
      `;
    });
}

completarTabla();

document.getElementById("guardar").addEventListener("click", () => {
  let codigo = document.getElementById("codigo").value;
  let nombre = document.getElementById("nombre").value;
  let precio = document.getElementById("precio").value;
  let descripcion = document.getElementById("descripcion").value;
  let imagen = document.getElementById("imagen").value;

  const productoExiste = Producto.mostrarArray().find(producto => producto.codigo === codigo);
  if (productoExiste) {
    Producto.editar(codigo, nombre, precio, descripcion, imagen);
  } else {
    Producto.agregar(codigo, nombre, precio, descripcion, imagen);
  }    

  completarTabla();

  document.getElementById("codigo").value = '';
  document.getElementById("nombre").value = '';
  document.getElementById("precio").value = '';
  document.getElementById("descripcion").value = '';
  document.getElementById("imagen").value = '';
});

document.getElementById("tablaProductos").addEventListener("click", (event) => {
  let button = event.target;
  let row = button.parentNode.parentNode;
  let codigo = row.cells[0].textContent;

  if (button.className === "eliminar") {
    Producto.eliminar(codigo);
    completarTabla();
  } else if (button.className === "editar") {
    document.getElementById("codigo").value = row.cells[0].textContent;
    document.getElementById("nombre").value = row.cells[1].textContent;
    document.getElementById("precio").value = row.cells[2].textContent;
    document.getElementById("descripcion").value = row.cells[3].textContent;
    document.getElementById("imagen").value = row.cells[4].querySelector('img').src;
  }
});

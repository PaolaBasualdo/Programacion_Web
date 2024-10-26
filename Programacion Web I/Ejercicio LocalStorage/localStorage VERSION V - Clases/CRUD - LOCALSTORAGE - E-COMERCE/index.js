import Producto from "./clases/Producto.js" //importacion de la clase Producto



function cargarProductos() { 
  const contenedorProductos = document.getElementById("contenedor-productos")
  contenedorProductos.innerHTML = "";

  Producto.mostrarArray().forEach(producto => { 
    const div = document.createElement("div"); 
    div.classList.add("producto");
    div.innerHTML = `
      <div class ="producto-detalle">
      <img src="${producto.imagen}" alt="Imagen del Producto" class="producto-imagen">
      <h3 class="producto-codigo"> ${producto.codigo}</h3>
      <h3 class="producto-nombre"> ${producto.nombre}</h3>
      <h3 class="producto-precio"> $ ${producto.precio}</h3>
      `;
    contenedorProductos.appendChild(div);
    });
}


cargarProductos();



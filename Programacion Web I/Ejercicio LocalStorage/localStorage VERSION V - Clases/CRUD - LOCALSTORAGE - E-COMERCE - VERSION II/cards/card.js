import Producto from "../clases/Producto.js";

function cargarProductos() { 
  const contenedorProductos = document.getElementById("contenedor-productos");
  contenedorProductos.innerHTML = "";

  Producto.mostrarArray().forEach(producto => { 
    const div = document.createElement("div"); 
    div.classList.add("producto");
    div.innerHTML = `
      <div class="producto-detalle">
        <img src="${producto.imagen}" alt="Imagen del Producto" class="producto-imagen p-8 rounded-t-lg">
        <h3 class="producto-codigo">${producto.codigo}</h3>
        <h3 class="producto-nombre">${producto.nombre}</h3>
        <h3 class="producto-precio text-3xl font-bold text-gray-900 dark:text-white">$ ${producto.precio}</h3>
        <p class="producto-descripcion text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${producto.descripcion}</p> 
        
      </div>
    `;
    contenedorProductos.appendChild(div);
  });
}

cargarProductos();

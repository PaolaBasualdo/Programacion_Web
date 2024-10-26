import Producto from '../classes/Producto.js';

const mostrarProductos = () => {
    const section = document.getElementById('productos');
    Producto.allItems.forEach(product => {
        section.innerHTML += `
        <div id="${product.codigo}">
            <img src="${product.imagen}" alt="${product.nombre}">
            <h3>$${product.precio}</h3>
            <h4>${product.nombre}</h4>
            <button data-codigo="${product.codigo}" class="button add">Agregar al carrito</button>
        </div>
        `;
    });
}

mostrarProductos();

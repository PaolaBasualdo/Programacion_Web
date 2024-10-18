// Importación de la clase Producto
import Producto from "./clases/Producto.js"; 

function completarTabla() { 
    const tablaProductos = document.getElementById("tablaProductos"); // Se obtiene el elemento HTML con el id tablaProductos
    tablaProductos.innerHTML = ""; // Borra el contenido actual para evitar que se duplique la información

    // Producto.mostrarArray() es #items, el array donde se encuentran todas las instancias de la clase.
    Producto.mostrarArray().forEach(producto => { // Se itera sobre #items
        tablaProductos.innerHTML += `
        <tr>
          <td>${producto.codigo}</td>
          <td>${producto.nombre}</td>
          <td>${producto.precio}</td>
          <td>${producto.imagen}</td>
          <td><button class="eliminar">Eliminar</button></td>
          <td><button class="editar">Editar</button></td>
        </tr>
      `;
    });
}

completarTabla(); // Ejecuta la función al cargar la página

// Evento guardar
document.getElementById("guardar").addEventListener("click", (event) => {
    // Captura la información ingresada en los campos del formulario.
    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let imagen = document.getElementById("imagen").value; // Asegúrate de tener un campo de entrada para la imagen

    const productoExiste = Producto.mostrarArray().find(producto => producto.codigo === codigo); // Verifica si el producto ya existe
    if (productoExiste) {
        Producto.editar(codigo, nombre, precio, imagen); // Edita el producto existente
    } else {
        Producto.agregar(codigo, nombre, precio, imagen); // Agrega un nuevo producto
    }

    completarTabla(); // Actualiza la tabla

    // Limpia los campos del formulario
    document.getElementById("codigo").value = '';
    document.getElementById("nombre").value = '';
    document.getElementById("precio").value = '';  
    document.getElementById("imagen").value = ''; // Limpia el campo de imagen
});

// Evento para manejar clics en la tabla
document.getElementById("tablaProductos").addEventListener("click", (event) => {
    let button = event.target; // Captura el botón clicado
    let row = button.closest("tr"); // Encuentra la fila más cercana
    let codigo = row.cells[0].textContent; // Obtiene el código del producto

    if (button.className === "eliminar") { // Si se hace clic en eliminar
        Producto.eliminar(codigo);  
        completarTabla(); // Actualiza la tabla después de eliminar
    } else if (button.className === "editar") { // Si se hace clic en editar
        document.getElementById("codigo").value = row.cells[0].textContent; // Carga datos en el formulario
        document.getElementById("nombre").value = row.cells[1].textContent;
        document.getElementById("precio").value = row.cells[2].textContent;
        document.getElementById("imagen").value = row.cells[3].textContent; // Carga la imagen
    }
});

// Clase Producto
export default class Producto {
    codigo;
    nombre;
    precio;
    imagen;

    constructor(codigo, nombre, precio, imagen) { // Constructor
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen; // Agregado
    }

    // Propiedad privada
    static #items = []; // Array privado

    // Inicialización estática
    static {
        const productosGuardados = JSON.parse(localStorage.getItem("productos")) || []; // Obtiene productos del localStorage
        productosGuardados.forEach(({codigo, nombre, precio, imagen}) => {
            this.#items.push(new Producto(codigo, nombre, precio, imagen)); // Crea instancias de Producto
        });
    }

    // Métodos estáticos
    static guardarEnLocalStorage() {
        localStorage.setItem("productos", JSON.stringify(this.#items)); // Guarda en localStorage
    }

    static agregar(codigo, nombre, precio, imagen) {
        const producto = new Producto(codigo, nombre, precio, imagen); // Crea una nueva instancia
        this.#items.push(producto); // Agrega al array
        this.guardarEnLocalStorage(); // Actualiza localStorage
    }

    static eliminar(codigo) {
        this.#items = this.#items.filter(item => item.codigo !== codigo); // Filtra el producto
        this.guardarEnLocalStorage(); // Actualiza localStorage
    }

    static mostrarArray() {
        return this.#items; // Devuelve el array privado
    } 

    static editar(codigo, nuevoNombre, nuevoPrecio, nuevaImagen) {
        const producto = this.#items.find(item => item.codigo === codigo); // Busca el producto
        if (producto) {
            producto.nombre = nuevoNombre; // Actualiza el nombre
            producto.precio = nuevoPrecio; // Actualiza el precio
            producto.imagen = nuevaImagen; // Actualiza la imagen
        }
        this.guardarEnLocalStorage(); // Actualiza localStorage
    }
}

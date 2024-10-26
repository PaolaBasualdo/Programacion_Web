
import Producto from '../classes/Producto.js'

const updateTablaProductos = () => {
    const tablaProductos = document.getElementById("tablaProductos")
    
    tablaProductos.innerHTML = ""

    Producto.allItems.forEach(product => {
        tablaProductos.innerHTML += `
            <tr id="${product.codigo}">

                <td>${product.codigo}</td>
                <td><img src="${product.imagen}" width="40px"></td>
                <td>${product.nombre}</td>
                <td>${product.descripcion}</td>
                <td>${product.precio}</td>


                <td>
                    <button data-id="${product.codigo}" class="eliminar">Eliminar</button>
                    <button data-id="${product.codigo}" class="editar">Editar</button>    
                </td>
         </tr>        `
    });
    
}

// Inicializar
updateTablaProductos()

document.getElementById("guardar").addEventListener("click", () => {
    let codigo = document.getElementById("codigo")
    let nombre = document.getElementById("nombre")
    let descripcion = document.getElementById("descripcion")
    let imagen = document.getElementById("imagen")
    let precio = document.getElementById("precio")

    let product = {
        codigo: codigo.value, 
        nombre: nombre.value, 
        descripcion: descripcion.value, 
        imagen:imagen.value,
        precio: precio.value
    }
    Producto.crear(product.codigo, product.nombre, product.descripcion, product.imagen, product.precio)
    updateTablaProductos()
})


document.getElementById("editar").addEventListener("click", (event) => {
    let button = event.target;
    let codigo = button.dataset.id;
    console.log("Editando producto: ", codigo)
    
    let nombre = document.getElementById("nombre")
    let descripcion = document.getElementById("descripcion")
    let imagen = document.getElementById("imagen")
    let precio = document.getElementById("precio")

    let producto = {
        codigo: codigo, 
        nombre: nombre.value, 
        descripcion: descripcion.value, 
        imagen:imagen.value,
        precio: precio.value
    }

    Producto.editar(codigo, producto)

    updateForm(false)
    

    updateTablaProductos()
 })  

function updateForm(producto){
    if(producto){ 
        //Actualizar Inputs
        document.getElementById("codigo").className = "d-none"
        document.getElementById("nombre").value = producto.nombre
        document.getElementById("descripcion").value = producto.descripcion
        document.getElementById("precio").value = producto.precio

        //Actualizar botones
        document.getElementById("guardar").className = "d-none"
        let botonEditar = document.getElementById("editar")
        
        botonEditar.className = ""
        botonEditar.dataset.id = producto.codigo
    }else {
        // Actualizar formulario
        document.getElementById("editar").className = "d-none"
        document.getElementById("guardar").className = ""
        document.getElementById("codigo").className = ""

        document.getElementById("editar").dataset.id =""
        document.getElementById("nombre").value = ""
        document.getElementById("descripcion").value = ""
        document.getElementById("precio").value = ""
        document.getElementById("imagen").value = ""

    }

}


document.getElementById("tablaProductos").addEventListener("click", (event) => {
    if (event.target.className === "eliminar") {//Eliminar
        // Identificar producto
        let button = event.target;
        let codigo = button.dataset.id;
        console.log("Producto elegido: ", codigo)

        // TODO: Eliminar del array
        Producto.eliminar(codigo)

        // Volver a renderizar tabla
        updateTablaProductos();
    }
    if (event.target.className === "editar") {//Seleccionar para editar
        let button = event.target;
        let codigo = button.dataset.id;
        console.log("Producto a editar: ", codigo)

        // TODO: Obtener producto
        let producto = Producto.findOne(codigo)
       
        //Preparar formulario
        updateForm(producto=producto)
       
}
})

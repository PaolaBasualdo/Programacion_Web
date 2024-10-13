import Producto from "./clases/Producto.js" 

//const productosGlobal = Producto.rellenar();

function completarTabla() { 
    const tablaProductos = document.getElementById("tablaProductos");
    tablaProductos.innerHTML = "";

    
    Producto.items.forEach(producto => { 
      tablaProductos.innerHTML += `
        <tr>
          <td>${producto.codigo}</td>
          <td>${producto.nombre}</td>
          <td>${producto.precio}</td>
          <td><button class="eliminar">Eliminar</button></td>
        </tr>
      `;
    });
}


completarTabla();

document.getElementById("guardar").addEventListener("click", (event) => {
    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    
    //const nuevoProducto = new Producto(codigo, nombre, precio);
    Producto.agregar(codigo, nombre, precio);
    

     
    completarTabla();

   
    document.getElementById("codigo").value = '';
    document.getElementById("nombre").value = '';
    document.getElementById("precio").value = '';   
    console.log(Producto.items)
});

document.getElementById("tablaProductos").addEventListener("click", (event) => {
  if (event.target.className === "eliminar") {
    let button = event.target;//hacer el eliminar desde el boton
    let row = button.parentNode.parentNode;
    let codigo = row.cells[0].textContent;

    //row.remove();

    
    Producto.eliminar(codigo)
    /*Producto.items = Producto.items.filter(item => item.codigo !== codigo);*/
    //productosGlobal = Producto.rellenar(); 
    console.log(Producto.items)

   completarTabla();

}
    

});
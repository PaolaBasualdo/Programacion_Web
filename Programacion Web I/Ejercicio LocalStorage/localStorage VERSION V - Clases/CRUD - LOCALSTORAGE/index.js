import Producto from "./clases/Producto.js" //importacion de la clase Producto

function completarTabla() { 
    const tablaProductos = document.getElementById("tablaProductos");// se obtiene el elemento html con el id tablaProductos, justamente el que tiene la etiqueta table
    tablaProductos.innerHTML = "";//borra el contenido actual para evitar que se duplique lla informacion

    // a continuacion Producto.mostrarArray() es #items, el array donde se encuentran todos las instancias de la clase, la unica forma de acceder desde fuera de la clase es atraves del metodo mostrarArray(). la idea es que #items está encapsulado dentro de la clase para protegerlo y evitar modificaciones directas desde el exterior, y mostrarArray() es la única vía de acceso que permite consultar su contenido de forma controlada.
    Producto.mostrarArray().forEach(producto => { //se itera sobre #items y por cada instancia(producto) se obtienen las propiedades codigo, nombre, precio para completar dinamicamente cada <tr> fila de la tabla. Se insertan en el elemeto html tabla cada una de las filas, += garantiza que las nuevas filas se agregan a las existentes, formando una tabla con una fila por cada producto. Ademas de los botones eliminar y editar todo con el uso de una template string
      tablaProductos.innerHTML += `
        <tr>
          <td>${producto.codigo}</td>
          <td>${producto.nombre}</td>
          <td>${producto.precio}</td>
          <td><button class="eliminar">Eliminar</button></td>
          <td><button class="editar">Editar</button></td>
        </tr>
      `;
    });
}


completarTabla();// ejecuto la funcion, si hay algo en el local storage, #items se completa con nuevas instancias y se renderiza la tabla. Al cargar la página, el bloque estático en la clase Producto se ejecuta automáticamente. Si hay productos guardados en localStorage, se recuperan y se convierten en instancias de la clase Producto. Luego, estas instancias se almacenan en el array privado #items

//evento guardar, podria haber referenciado el boton guardar y guardarlo en una variable botonGuardar = document.getElementById("guardar"). El evento click asigna variables al contenido de cada input del formulario
 
document.getElementById("guardar").addEventListener("click", (event) => {
  //  Cuando se hace clic en el botón "guardar", se captura la información ingresada en los campos del formulario.
  let codigo = document.getElementById("codigo").value;//Se obtiene el valor del campo de entrada cuyo id es codigo, y se almacena en la variable codigo.
    let nombre = document.getElementById("nombre").value;//Igual para npmbre y precio
    let precio = document.getElementById("precio").value;

    const productoExiste = Producto.mostrarArray().find(producto => producto.codigo === codigo);//se declara una variable que aloja el resultado de la busqueda, se itera sobre #items y se busca el producto o la instancia cuya propiedad codigo sea igual al codigo del producto, el que se toma como valor del input
     if(productoExiste){
      Producto.editar(codigo, nombre, precio);//lo editamos, se llama al método Producto.editar(codigo, nombre, precio), el cual actualiza los valores del producto con ese código. Este método cambia los valores de nombre y precio del producto encontrado.
     }else {//si productoExiste es undefined
      Producto.agregar(codigo, nombre, precio);//es decir, dentro de #items no hay ninguna instancia cuyo codigo coincida con el que se busca, entonces se agrega. Se llama al método Producto.agregar(codigo, nombre, precio), que crea una nueva instancia del producto y lo agrega al array #items.
     }    

     
    completarTabla();

   
    document.getElementById("codigo").value = '';//se le asigna una cadena vacia a cada campo de items para que se blanquee
    document.getElementById("nombre").value = '';
    document.getElementById("precio").value = '';   
    
});

//cuando se hace clic en algún elemento dentro de la tabla, se captura ese evento.
document.getElementById("tablaProductos").addEventListener("click", (event) => {
  let button = event.target; //declaro una variable boton que es igual al lugar donde se hizo click. Captura el boton cliqueado, event.target es una propiedad que hace referencia al elemento exacto donde ocurrió el clic
  let row = button.parentNode.parentNode;// otra variable mas, es la fila donde se encuentra el boton, que esta dentro de la celda <td> que a su vez esta en la fila <tr>. button.parentNode selecciona al padre del boton, que es la celda y button.parentNode.parentNode selecciona el padre de td, que es tr, la fila completa
  let codigo = row.cells[0].textContent;// el codigo es igual al valor de la celda 0, row.cells es una colección de todas las celdas <td> dentro de esa fila. Con textContent se oBtiene el valor textual de la celda con el indice 0

  if (event.target.className === "eliminar") {//si el lugar donde se produjo el click es de la clase eliminar, el boton eliminar que se crea dinamicamnete al renderizar la tabla se ejecuta el metodo eliminar, que implica filtra el array privado #items, excluyendo el producto cuyo código coincide con el que se pasó como argumento.
    
    Producto.eliminar(codigo);  
    completarTabla();

  } else if 
    (button.className === "editar") {//en este caso hace referncia al boton de la clase editar, crado dinamicamente al renderizar la tabla
    // los datos del producto seleccionado se cargan en los campos del formulario, permitiendo al usuario modificar esos valores. 
      document.getElementById("codigo").value = row.cells[0].textContent;//se coloca el codigo del producto sellecionado para editar en el input , en el campo codigo del formulario y asi con el resto de las propiedades y campos
      document.getElementById("nombre").value = row.cells[1].textContent;
      document.getElementById("precio").value = row.cells[2].textContent;
  }}
  
    

);
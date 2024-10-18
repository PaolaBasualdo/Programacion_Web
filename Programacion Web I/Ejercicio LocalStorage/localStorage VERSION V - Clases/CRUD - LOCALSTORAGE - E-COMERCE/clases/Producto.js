
export default class Producto { //se define la clase Producto con tres propiedades: codigo, nombre, precio
    codigo;
    nombre;
    precio;
    imagen;
    
    
    constructor(codigo, nombre, precio, imagen) {//el constructor de la clase para crear instancias de productos, recibe parametros y le asigna propiedades al objeto
        this.codigo = codigo;//this referencia a la instacia, el codigo del objeto es codigo
        this.nombre = nombre;// el nombre del objeto es nombre
        this.precio = precio;// el precio del objeto es precio
        this.imagen = imagen;
       
    }
    //propiedad privada
    static #items = [];//defino un array privado(items) que contendra todos los productos creados, pertenece a la clase y no a una instancia individual. Puedo acceder a items dentro de la propia clase por ejemplo console.log(Producto.#items) no funciona da un error


    //Inicializacion estatica

    static { //se ejecuta una unica vez, cuando se carga la clase por primera vez
        const productosGuardados = JSON.parse(localStorage.getItem ("productos")) || []; //se crea una variable productosGuardados que almacenará un array. El contenido proviene del localStorage, donde se guarda bajo la clave "productos". JSON.parse() convierte la cadena de texto (JSON) obtenida del localStorage en un array de objetos. Por defecto, si no hay nada en el almacenamiento local se crea un array vacio. Cada elemento del array productosGuardados será un objeto que representa un producto almacenado.
        productosGuardados.forEach(({codigo, nombre, precio, imagen}) => {this.#items.push(new Producto (codigo,nombre,precio))//este bloque de código asegura que cualquier dato guardado en el localStorage se convierta en instancias de Producto y se almacene en #items cuando la página se carga. 
        //{codigo, nombre, precio} es una desestructuración de un objeto. 
        //para cada elemento de productosGuardados extrae directamente las propiedades codigo, nombre, y precio del objeto. Con esos valores, se crea una nueva instancia de Producto con el constructor: new Producto(codigo, nombre, precio). Esta nueva instancia se agrega al array #items con this.#items.push().
        // otra forma: productosGuardados.forEach(producto => { this.#items.push(new Producto(producto.codigo, producto.nombre, producto.precio));
        });      

    };

//metodos estaticos: un método estático  pertenece a la clase y no a las instancias individuales. Se accede directamente a través de la clase, sin necesidad de crear una instancia.En este caso son publicos, se puede acceder desde cualquier parte del codigo
//La clave bajo la cual se guarda esta información es "productos", y el valor asociado a esta clave es el array #items convertido a una cadena de texto.
//this.#items significa "la propiedad privada #items de esta clase".
//En un método estático this se refiere a la clase. 
//la propiedad privada #items es un array que contiene objetos de tipo Producto.

    static guardarEnLocalStorage () {
        localStorage.setItem ("productos", JSON.stringify(this.#items)
        )
    };

    //El método agregar toma los parámetros codigo, nombre y precio, instancia un nuevo objeto Producto, lo agrega al array privado #items, y luego sincroniza el localStorage con el contenido actualizado de este array
    static agregar(codigo, nombre, precio, imagen) {
        const producto = new Producto(codigo, nombre, precio, imagen);
        this.#items.push(producto)//this hace referncia a la clase
        this.guardarEnLocalStorage();
    }

   //En el método eliminar, con el parámetro codigo, accedo al array privado #items y reasigno su contenido usando filter, para crear un nuevo array que contiene todos los elementos excepto el que tiene el código que quiero eliminar. Luego, actualizo el localStorage con este nuevo array.
    static eliminar(codigo) {
       this.#items = this.#items.filter(item => item.codigo !== codigo);
       this.guardarEnLocalStorage();
    }
    //permite que, desde fuera de la clase, se acceda al contenido del array privado #items.
    static mostrarArray() {
        return this.#items;
      } 

    // en el metodo editar crea la variable producto y su valor se obtiene de iterar sobre el array #items y buscar al producto que tenga el mismo codigo que el parametro codigo. Si lo encuentra le cambia el nombre y el precio. Finalmente actaliza el localStorage.

    static editar(codigo, nuevoNombre, nuevoPrecio, nuevaImagen){
        const producto = this.#items.find(item => item.codigo === codigo);
        if(producto){
            producto.nombre = nuevoNombre;
            producto.precio = nuevoPrecio;
            producto.imagen = nuevaImagen; 
            

        }
        this.guardarEnLocalStorage();

    }

}



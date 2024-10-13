
export default class Producto {
    codigo;
    nombre;
    precio;
    
    
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;//this referencia a la instacia
        this.nombre = nombre;
        this.precio = precio;
       
    }

    static items = [];

static save (local storage);

    static agregar(codigo, nombre, precio) {
        const producto = new Producto(codigo, nombre, precio);
        this.items.push(producto)//this hace referncia a la clase
    }

   
    static eliminar(codigo) {
       this.items = Producto.items.filter(item => item.codigo !== codigo);
    }

    static rellenar() {
        return this.items;
      } 

}



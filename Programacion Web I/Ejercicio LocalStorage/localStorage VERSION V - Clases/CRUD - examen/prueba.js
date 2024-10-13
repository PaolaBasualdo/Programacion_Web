export default class Producto {
    codigo;
    nombre;
    precio;

    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    
    static obtenerItems() {// metodo estático que retorna un array vacío
        return [];
    }

    // metodo para agregar un producto a la lista
    static agregar(producto) {
       let items = Producto.obtenerItems();
        items.push(producto);
        return items; //array con el producto agregado
    }

    //  para eliminar un producto usando su código
    static eliminar(codigo) {
        let items = Producto.obtenerItems();
        items = items.filter(item => item.codigo !== codigo);
        return items; //  el array actualizado sin el producto eliminado
    }

    //  para rellenar (devolver los items actuales)
    static rellenar() {
        return Producto.obtenerItems();
    }
}

export default class Producto {   
    static #items = [] 

    static {
        let productos = window.localStorage.getItem('productos')
        if (productos) {
            this.#items = JSON.parse(productos).map(item => new this(item.codigo, item.nombre, item.descripcion, item.precio, item.imagen))
        }
    }

    static get allItems(){
        return this.#items
    }
    static findOne(codigo){
        return this.#items.find(producto => producto.codigo === codigo)

    }
    static #saveItems() {
        window.localStorage.setItem('productos', JSON.stringify(this.#items))
    }

    static crear(codigo, nombre, descripcion, precio, imagen) {
        let producto = new Producto(codigo, nombre, descripcion, precio, imagen)
        this.#items.push(producto)
        this.#saveItems()

        return producto
    }

    static eliminar(codigo){
        this.#items = this.#items.filter(product => product.codigo!== codigo)
        this.#saveItems()
    }


    static editar (codigo, values){
        let index;
        this.#items.forEach((p, i) => {
            if(p.codigo === codigo) {
                index =i
             }
        })

        let producto = this.#items[index]

        producto.nombre = values.nombre //explica 20:43
        producto.descripcion = values.descripcion
        producto.precio = values.precio
        producto.imagen = values.imagen

        this.#items[index] = producto

        this.#saveItems()
    }

    constructor (codigo, nombre, descripcion, precio, imagen){
        this.codigo = codigo
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.imagen = imagen
    }
}


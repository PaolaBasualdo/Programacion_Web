export let filtrarPares = (array) => {
        let pares = [];
        array.forEach( (elemento) => {
        if (elemento % 2 === 0) {
            pares.push(elemento);
        }})
        return pares;
}
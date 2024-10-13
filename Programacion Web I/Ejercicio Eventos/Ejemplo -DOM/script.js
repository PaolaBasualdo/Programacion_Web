//console.log(document);//muestra los nodos o elementos del HTML

//console.log(document.querySelector("h1")); //Seleccionamos el titulo, aparece por consola

//console.log(document.querySelector(".parrafo"));//Selecciona por clase

//console.log(document.querySelector("#parrafo"));//acceder atraves de la id

//CAMBIAR UN ELEMENTO, EL TITUL POR EJEMPLO

/*const titulo = document.querySelector("h1");//creamos una variable
titulo.textContent = "Titulo del Ejemplo"; //cambiamos el elemento*/

//ACEDER A ELEMENTOS POR CLASE (a todos los de la clase)

/*const texto = document.getElementsByClassName('parrafo');//accede a TODOS los elemtos de la clase, y ya no hay que ponerle punto
console.log(texto);*/

//ACCEDER A UN ELEMNTO POR ID (a uno unico, por eso no deben repetirse las id)

/*const texto = document.getElementById("parrafo");
console.log(texto); // por consola aparece el unico elemento que tiene la ID parrafo*/

//SELECCIONAR TODOS LOS ELEMENTOS 
/*const texto = document.querySelectorAll("p"); //Selecciona todos los parrafos
console.log(texto);// da una lista de nodos */

//SUSTITUIR ELEMENTOS NO SOLO TEXTO CON innerHTML

/*const texto = document.querySelector(".parrafo"); // seleccionamos la clase parrafo
texto.innerHTML = "<h2> Segundo Titulo </h2>"; */

//A DIFERENCIA DE textContent tambien se pueden agregar etiquetas u otros elementos

//AGREGAR Y REMOVER CLASES

/*const text = document.querySelector(".parrafo");//selecciona la clase parrafo
text.classList.add("texto"); 
console.log(text)// muestra que tiene dos clases, texto y parrafo*/

/*const texto = document.querySelector(".parrafo");
texto.classList.remove("parrafo");
console.log(texto);// ya no tiene mas ninguna clase*/

//AGREGAR UN ELEMENTO 

/*const listaDeCompras = document.querySelector('ul'); //selecciona la etiqueta ul
const li = document.createElement('li'); //crea un nuevo espacio para agregar algo a la lista de compras
li.textContent= 'Queso';
listaDeCompras.appendChild(li) //lo agrega a ul*/
 
//AGREGA UN ELEMENTO DESDE UN ARRAY

//CON UN BUCLE FOR:
/*
const listaDecompras = document.querySelector("ul");
let compras =["Queso", "Leche", "Pan"]; 
for (let i =0; i< compras.length; i++){
    const li = document.createElement("li");
    li.textContent = compras[i];
    listaDecompras.appendChild(li)

}*/

//CON FOREACH:

/*const listaDeCompras = document.querySelector("ul");
const compras = ["Queso", "Leche", "Pan"];

compras.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = producto;
    listaDeCompras.appendChild(li);
})*/

// ESCUCHAR UN EVENTO:
/*const parrafo = document.querySelector("p");
const boton = document.querySelector("button");

let contador = 0;

boton.addEventListener("click", () => {
    contador++;
    parrafo.textContent = contador;
});*/

// EVENTO CHANGE

/*const parrafo = document.querySelector("p"); 
let input = document.querySelector("input");

input.addEventListener("change", (evento) => { // si se escribe algo en el input y se pica en otra parte se produce el evento y quiero que cuando eso ocurra el parrafo sea lo que se ingreso en el input
    parrafo.textContent= evento.target.value;

})*/

//EVENTOS PRODUCIDO POR EL MOUSE:
/*const bloque = document.querySelector('.bloque');

bloque.addEventListener("mouseenter", () =>{
    bloque.style.backgroundColor ='grey'; //cuando el mouse pasa por encima cambia a gris

})

bloque.addEventListener("mouseleave", ()=>{
    bloque.style.backgroundColor = 'aquamarine'; //cuando sale del bloque vuelve al color original

})*/


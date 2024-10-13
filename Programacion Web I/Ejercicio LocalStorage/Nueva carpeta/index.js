let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
    { nombre: "Sofia", apellido: "Heredia", edad: 25, email: "sofi@issr.edu" },
    { nombre: "Paola", apellido: "Basualdo", edad: 50, email: "pao@issr.edu" },
    { nombre: "Yazmin", apellido: "Juarez", edad: 17, email: "yaz@issr.edu" },
    { nombre: "Daniel", apellido: "Cuda", edad: 28, email: "dani@issr.edu" }
];



// Si usuarios está vacío (es decir, no había nada en localStorage), lo guardamos
if (!localStorage.getItem('usuarios')) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

console.log(usuarios);//control
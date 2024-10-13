export function rellenarTabla(usuarios) {
    const tablaUsuario = document.getElementById("tablaUsuarios");
    usuarios.forEach((usuario, index) => { //index para asignarle el indice del array a cada usuario
        tablaUsuario.innerHTML += `
        <tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.edad}</td>
            <td>${usuario.email}</td>
            <td><button class="eliminar" data-index="${index}">Eliminar</button></td> 
        </tr>
        `;
       
    });
    document.querySelectorAll('.eliminar').forEach(boton => { //lista de nodos como un array por eso puedo aplicar forEach
        boton.addEventListener('click', function() {
            let index = boton.getAttribute('data-index');//método getAttribute se utiliza para obtener el valor de un atributo específico de un elemento HTML. En este caso el data-index
            usuarios.splice(index, 1);//se elimina un objeto en la posicion index 
    
            let fila = boton.closest('tr');
            fila.parentNode.removeChild(fila);
            
            
        });
    });
    


   
};
JS


function updateTablaUsuarios() {
    const tablaUsuarios = document.getElementById("tablaUsuarios")
    const localStorage = window.localStorage;
    
    tablaUsuarios.innerHTML = ""

    let usuarios = JSON.parse(localStorage.getItem("users"))
    
    if (usuarios === undefined || usuarios === null) {
        usuarios = []
    }

    usuarios.forEach(user => {
        tablaUsuarios.innerHTML += `
            <tr>
                <td>${user.nombre}</td>
                <td>${user.email}</td>
                <td>${user.edad}</td>
            </tr>
        `
    });
}


updateTablaUsuarios()


document.getElementById("guardar").addEventListener("click", () => {
    let nombre = document.getElementById("nombre")
    let email = document.getElementById("email")
    let edad = document.getElementById("edad")

    let user = {
        nombre: nombre.value, 
        email: email.value, 
        edad: edad.value
    }

    let usuarios = JSON.parse(localStorage.getItem("users"))

    if (usuarios === null) {
        usuarios = [user]
    } else {
        usuarios.push(user)
    }

    localStorage.setItem("users", JSON.stringify(usuarios))

    updateTablaUsuarios()
})
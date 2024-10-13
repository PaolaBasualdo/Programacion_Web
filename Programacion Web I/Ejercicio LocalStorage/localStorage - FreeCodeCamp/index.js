const userObj = {
    username: "Maria",
    email: "maria@mail.com"
  };
  
  localStorage.setItem('user', JSON.stringify(userObj));//agrega userObj al local storage, no sin antes convertilo a string

const usuario = localStorage.getItem('user');//obtengo la clave user

 console.log(typeof (usuario)); //obtengo el tipo de dato

 const usuario1 = JSON.parse(usuario); //lo convierte al dato original

 console.log(usuario1);
 console.log(typeof(usuario1)); 

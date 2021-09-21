document.addEventListener("DOMContentLoaded", function (e) {

    let usuario = document.getElementById("usuario") 
    let usuarioLogueado = JSON.parse(localStorage.getItem("nombreUsuario")) //traigo lo que quedo guardado en el set
    usuario.innerHTML = "Usuario: " + usuarioLogueado.username; 
  
    document.getElementById("salir").addEventListener("click", function () { //el boton salir va a hacer lo siguiente
      localStorage.removeItem("nombreUsuario");
      window.location = "index.html"
    });
  
  });
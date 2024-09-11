/// este code es para el menu hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const logo = document.getElementsByClassName("logo")

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
   
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

//kmkefneikfne

function validar() {
  let nombre = document.getElementById("Nombre").value;
  let email = document.getElementById("Email").value;
  let mensaje = document.getElementById("Mensaje").value;

  if (nombre === "") {
      alert("Complete el campo de nombre");
      return false;
  } else if (email === "") {
      alert("Complete el campo de correo electrónico");
      return false;
  } else if (mensaje === "") {
      alert("Complete el campo de mensaje");
      return false;
  }
  alert("su envio fue exitoso");
  return true;

}

alert("mf")








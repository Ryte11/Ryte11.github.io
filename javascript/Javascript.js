const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});





/// este code es para el menu hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

function validarFormulario(event) {
    event.preventDefault()

    const usuario = document.getElementById("Usuario").value;
    const telefono = document.getElementById("Telefono").value;
    const correoElectronico = document.getElementById("Correo Electronico").value;
    const cedula = document.getElementById("Cedula").value;
    const contrasena = document.getElementById("Contraseña").value;





    // Validation logic, including specific requirements for each field:
    if (usuario === "") {
      alert ( "Por favor, ingresa tu usuario.");
      return false;
    }
    else if (telefono === "") {
      alert ("Por favor, ingresa tu teléfono.");
      return false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoElectronico.value)) {
      alert ("Por favor, ingresa un correo electrónico válido.");
      return false;
    }
    else if (cedula === "") {
      alert ("Por favor, ingresa tu cédula.");
      return false;
    }
    else if (contrasena.length < 8) {
      alert ( "La contraseña debe tener al menos 8 caracteres.");
      return false;
    }




     else {
      alert("Felecidades ya te haz registrado")
      
      setTimeout(function() {
        document.getElementById("form").submit();
    }, 2000);

    }
  }

//// validar form inicio de seccion

function validarFormulario1(event) {
  event.preventDefault()

  const usuario = document.getElementById("Usuario").value;
  const telefono = document.getElementById("Telefono").value;
  const correoElectronico = document.getElementById("email").value;
  const cedula = document.getElementById("Cedula").value;
  const contrasena = document.getElementById("cont").value;





  // Validation logic, including specific requirements for each field:
   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoElectronico.value)) {
    alert ("Por favor, ingresa un correo electrónico válido.");
    return false;
  }
  else if (cedula === "") {
    alert ("Por favor, ingresa tu cédula.");
    return false;
  }
  else if (cont.length < 8) {
    alert ( "La contraseña debe tener al menos 8 caracteres.");
    return false;
  }


   else {
    alert("Felecidades ya te haz registrado")
    
    setTimeout(function() {
      document.getElementById("form").submit();
  }, 2000);

  }
}


function validarFormulario(event) {
  event.preventDefault()

  const usuario = document.getElementById("Usuario").value;
  const telefono = document.getElementById("Telefono").value;
  const correoElectronico = document.getElementById("Correo Electronico").value;
  const cedula = document.getElementById("Cedula").value;
  const contrasena = document.getElementById("Contraseña").value;
  const REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;




  if (usuario === "") {
    alert ( "Por favor, ingresa tu usuario.");
    return false;
  }
  else if (telefono === "") {
    alert ("Por favor, ingresa tu teléfono.");
    return false;
  }
  else if (!REGEX.test(correoElectronico)) {
    alert ("Por favor, ingresa un correo electrónico válido.");
    return false;
  }
  else if (cedula === "") {
    alert ("Por favor, ingresa tu cédula.");
    return false;
  }
  else if (contrasena.length < 8) {
    alert ( "La contraseña debe tener al menos 8 caracteres.");
    return false;
  }




   else {
    alert("Felecidades ya te haz registrado")
    
    setTimeout(function() {
      document.getElementById("form").submit();
  }, 2000);

  }
}

//// validar form inicio de seccion

function validarFormulario1(event) {
event.preventDefault()


const email = document.getElementById("email").value;
const cont = document.getElementById("cont").value;
const REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



// arreglar el correo
if (!REGEX.test(email)) {
  alert ("Por favor, ingresa un correo electrónico válido.");
  return false;
}

else if (cont.length < 8) {
  alert ( "La contraseña debe tener al menos 8 caracteres.");
  return false;
}


 else {
  alert("Felecidades ya te haz registrado")
  
  setTimeout(function() {
    document.getElementById("form").submit();
}, 2000);

}
}



/////// otro form a proba


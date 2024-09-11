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










/// este es el code del chat ignorenlo 

function respuesta1(mensaje) {
    switch (mensaje) {
      case 'Boton 1':
        opcion1();
        break;

      case 'boton1-1': 
        opcion11();
        break;

    case 'boton1-2': 
        opcion11();
        break;
    case 'boton1-2':
        opcion12()  
      
        break;
    case 'boton1-3':
        opcion13()  
          
        break;
      case 'boton1-3':
        opcion13()  
            
          break;

      default:
        alert("No esta determinado")
        break;
    }
  }



function opcion1() {
    let textoPredeterminado = "Perfecto, ¿qué tipo de denuncia desea realizar?";
    let contenido = document.getElementById("contenido");
    let botones = document.querySelectorAll('.respuesta1, .respuesta2, .respuesta3');
    let parrafoUSer1="Deseo Realizar una denuncia.";

    
     // parrafo del chat
     let parrafouser = document.createElement("div");
     parrafouser.textContent = parrafoUSer1;
     parrafouser.style.marginTop = '10px';
     parrafouser.style.backgroundColor='#bcc0c7';
     parrafouser.style.padding='10px';
     parrafouser.style.borderRadius='5px';
     
     
     contenido.appendChild(parrafouser);

    // parrafo de respuesta del usuario
    let nuevoParrafo = document.createElement("div");
    nuevoParrafo.textContent = textoPredeterminado;
    nuevoParrafo.style.marginTop = '10px';
    nuevoParrafo.style.backgroundColor='#ffffff';
    nuevoParrafo.style.padding='10px';
    nuevoParrafo.style.borderRadius='5px';
   
  
    // el oppendchild es para agregar un contenido html a otro contenido html
    contenido.appendChild(nuevoParrafo);
  
    // Mostrar el conjunto de botones correspondiente a la opción seleccionada
    botones.forEach(boton => {
      boton.style.display = 'none';
    });
    document.querySelector('.respuesta11').style.display="contents"; // Mostrar los botones correspondientes a la opción 1
  }

  //////////////////////////////////////////

   // opcion 1.1
   function opcion11() {
    let textoPredeterminado = "Perfecto, Puede detallarnos mas a fondo la denuncia de ruido de parlantes, ubicacion donde se dieron los hechos y adjunte evidencias";
    let contenido = document.getElementById("contenido");
    let botones = document.querySelectorAll('.respuesta11');
    let parrafoUSer1="Denuncia sobre Ruido por parlantes.";

    

   // parrafo del chat
    let parrafouser = document.createElement("div");
    parrafouser.textContent = parrafoUSer1;
    parrafouser.style.marginTop = '10px';
    parrafouser.style.backgroundColor=' #bcc0c7';
    parrafouser.style.padding='10px';
    parrafouser.style.borderRadius='5px';
     
    contenido.appendChild(parrafouser);
    
  
    // Crear un nuevo elemento de párrafo
    let nuevoParrafo = document.createElement("div");
    nuevoParrafo.textContent = textoPredeterminado;
    nuevoParrafo.style.marginTop = '15px';
    nuevoParrafo.style.backgroundColor='#ffffff';
    nuevoParrafo.style.padding='10px';
    nuevoParrafo.style.borderRadius='5px';
    // el oppendchild es para agregar un contenido html a otro contenido html
    contenido.appendChild(nuevoParrafo);
    
    // Mostrar el conjunto de botones correspondiente a la opción seleccionada
    botones.forEach(boton => {
      boton.style.display = 'none';
    });
    
    document.querySelector('.custom-file-upload').style.display = 'flex';
    document.getElementById('input').disabled = false;
   
  }


  ///////////////

  


  function opcion12() {
    let textoPredeterminado = "Perfecto, Puede detallarnos mas a fondo la denuncia de ruido Por vehiculos, ubicacion donde se dieron los hechos y adjunte evidencias, Tipo de vehiculo y hora en la que se dio el hecho";
    let contenido = document.getElementById("contenido");
    let botones = document.querySelectorAll('.respuesta11');
    let parrafoUSer1 = "Denuncia sobre Ruido por vehiculos.";

    // Parrafo del chat
    let parrafouser = document.createElement("div");
    parrafouser.textContent = parrafoUSer1;
    parrafouser.style.marginTop = '10px';
    parrafouser.style.backgroundColor = '#bcc0c7';
    parrafouser.style.padding = '10px';
    parrafouser.style.borderRadius = '5px';

    contenido.appendChild(parrafouser);

    // Crear un nuevo elemento de párrafo
    let nuevoParrafo = document.createElement("div");
    nuevoParrafo.textContent = textoPredeterminado;
    nuevoParrafo.style.marginTop = '15px';
    nuevoParrafo.style.backgroundColor = '#ffffff';
    nuevoParrafo.style.padding = '10px';
    nuevoParrafo.style.borderRadius = '5px';

    // Append el nuevo párrafo al contenido
    contenido.appendChild(nuevoParrafo);

    // Mostrar el conjunto de botones correspondiente a la opción seleccionada
    botones.forEach(boton => {
        boton.style.display = 'none';
    });

    // esto no funciona/////////////
    let input = document.getElementById("input");
    if (input.disabled = false) {
        input.addEventListener("click", activarInput);
    }

    document.querySelector('.custom-file-upload').style.display = 'flex'; 
    document.getElementById('input').disabled = false;
    
}




function activarInput() {
    let input = document.getElementById("input");
    if (input) {
        input.disabled = false;
    }
}






  /////////////

  function opcion13() {
    let textoPredeterminado = "Perfecto, Puede detallarnos mas a fondo la denuncia de ruido Por Construcciones fuera de horario?, ubicacion donde se dieron los hechos y adjunte evidencias, persona o constructora que realizahba el acto.";
    let contenido = document.getElementById("contenido");
    let botones = document.querySelectorAll('.respuesta11');
    let parrafoUSer1="Denuncia sobre Ruido por Construcciones fuera de horario.";

    

   // parrafo del chat
    let parrafouser = document.createElement("div");
    parrafouser.textContent = parrafoUSer1;
    parrafouser.style.marginTop = '10px';
    parrafouser.style.backgroundColor=' #bcc0c7';
    parrafouser.style.padding='10px';
    parrafouser.style.borderRadius='5px';
     
    contenido.appendChild(parrafouser);
    
  
    // Crear un nuevo elemento de párrafo
    let nuevoParrafo = document.createElement("div");
    nuevoParrafo.textContent = textoPredeterminado;
    nuevoParrafo.style.marginTop = '15px';
    nuevoParrafo.style.backgroundColor='#ffffff';
    nuevoParrafo.style.padding='10px';
    nuevoParrafo.style.borderRadius='5px';
    // el oppendchild es para agregar un contenido html a otro contenido html
    contenido.appendChild(nuevoParrafo);
  
    // Mostrar el conjunto de botones correspondiente a la opción seleccionada
    botones.forEach(boton => {
      boton.style.display = 'none';
    });
    document.querySelector('.custom-file-upload').style.display = 'flex'; 
    document.getElementById('input').disabled = false;
  }




  

  ////////////////

  function respuesta2(mensaje) {
    switch (mensaje) {
      case 'Boton 2':
        opcion2();
        break;

      case 'boton2-1': 
        opcion21();
        break;

    case 'boton2-2':
        opcion22()  
      
        break;
    case 'boton2-3':
        opcion23()  
        break;

      default:
        alert("No esta determinado")
        break;
    }
  }

  function opcion2() {
    let textoPredeterminado = "Que mal, ¿qué tipo de queja tiene?";
    let contenido = document.getElementById("contenido");
    let botones = document.querySelectorAll('.respuesta1, .respuesta2, .respuesta3');
    let parrafoUSer1="Tengo una queja del trato brindado..";

    
     // parrafo del chat
     let parrafouser = document.createElement("div");
     parrafouser.textContent = parrafoUSer1;
     parrafouser.style.marginTop = '10px';
     parrafouser.style.backgroundColor='#bcc0c7';
     parrafouser.style.padding='10px';
     parrafouser.style.borderRadius='5px';
     
     contenido.appendChild(parrafouser);

    // parrafo de respuesta del usuario
    let nuevoParrafo = document.createElement("div");
    nuevoParrafo.textContent = textoPredeterminado;
    nuevoParrafo.style.marginTop = '10px';
    nuevoParrafo.style.backgroundColor='#ffffff';
    nuevoParrafo.style.padding='10px';
    nuevoParrafo.style.borderRadius='5px';
  
    // el oppendchild es para agregar un contenido html a otro contenido html
    contenido.appendChild(nuevoParrafo);
  
    // Mostrar el conjunto de botones correspondiente a la opción seleccionada
    botones.forEach(boton => {
      boton.style.display = 'none';
    });
    document.querySelector('.respuesta2').style.display = 'contents'; // Mostrar los botones correspondientes a la opción 1
  }

  //////////////////////////////////////////

   // opcion 1.1
   function opcion21() {
    let textoPredeterminado = "Entendemos su frustración. Lamentamos profundamente cualquier inconveniente que esto haya causado. Nos pondremos en contacto con usted lo antes posible para resolver su situación y mejorar nuestros servicios. Gracias por compartir su preocupación con nosotros.";
    let contenido = document.getElementById("contenido");
    let botones = document.querySelectorAll('.respuesta2');
    let parrafoUSer1="Realize una denuncia y no se me ha atendido.";

    

   // parrafo del chat
    let parrafouser = document.createElement("div");
    parrafouser.textContent = parrafoUSer1;
    parrafouser.style.marginTop = '10px';
    parrafouser.style.backgroundColor=' #bcc0c7';
    parrafouser.style.padding='10px';
    parrafouser.style.borderRadius='5px';
     
    contenido.appendChild(parrafouser);
    
  
    // Crear un nuevo elemento de párrafo
    let nuevoParrafo = document.createElement("div");
    nuevoParrafo.textContent = textoPredeterminado;
    nuevoParrafo.style.marginTop = '15px';
    nuevoParrafo.style.backgroundColor='#ffffff';
    nuevoParrafo.style.padding='10px';
    nuevoParrafo.style.borderRadius='5px';
    // el oppendchild es para agregar un contenido html a otro contenido html
    contenido.appendChild(nuevoParrafo);
  
    // Mostrar el conjunto de botones correspondiente a la opción seleccionada
    botones.forEach(boton => {
      boton.style.display = 'none';
    });
    document.getElementById('input').disabled = false;
    document.querySelector('.custom-file-upload').style.display = 'flex';
    document.getElementById('input').disabled = false;
  }


  ///////////////

  


  function opcion22() {
    let textoPredeterminado = "Lamentamos los inconvenientes que haya experimentado al intentar realizar una denuncia en nuestra página. Valoramos su retroalimentación y tomamos este problema muy en serio. Nuestro equipo técnico está investigando activamente esta situación para resolver los fallos y mejorar la experiencia de nuestros usuarios. Agradecemos su paciencia y le pedimos disculpas por cualquier molestia que esto haya causado.";
    let contenido = document.getElementById("contenido");
    let botones = document.querySelectorAll('.respuesta2');
    let parrafoUSer1="La pagina tiene fallos al momento de hacer una denuncia.";

    

   // parrafo del chat
    let parrafouser = document.createElement("div");
    parrafouser.textContent = parrafoUSer1;
    parrafouser.style.marginTop = '10px';
    parrafouser.style.backgroundColor=' #bcc0c7';
    parrafouser.style.padding='10px';
    parrafouser.style.borderRadius='5px';
     
    contenido.appendChild(parrafouser);
    
  
    // Crear un nuevo elemento de párrafo
    let nuevoParrafo = document.createElement("div");
    nuevoParrafo.textContent = textoPredeterminado;
    nuevoParrafo.style.marginTop = '15px';
    nuevoParrafo.style.backgroundColor='#ffffff';
    nuevoParrafo.style.padding='10px';
    nuevoParrafo.style.borderRadius='5px';
    // el oppendchild es para agregar un contenido html a otro contenido html
    contenido.appendChild(nuevoParrafo);
  
    // Mostrar el conjunto de botones correspondiente a la opción seleccionada
    botones.forEach(boton => {
      boton.style.display = 'none';
    });
    document.getElementById('input').disabled = false;
    document.querySelector('.custom-file-upload').style.display = 'flex';
  }




  /////////////

  function opcion23() {
    let textoPredeterminado = "Lamentamos sinceramente escuchar que haya experimentado una situación en la que se sintió falto de respeto por parte de nuestro personal. Valoramos profundamente su retroalimentación y tomamos estas quejas con extrema seriedad. Investigaremos este asunto de inmediato y nos comunicaremos con usted para comprender mejor lo sucedido. Nuestro objetivo es garantizar un trato respetuoso y profesional en todo momento. Le aseguramos que tomaremos las medidas necesarias para abordar este incidente y evitar que se repita en el futuro. Si puede mostranos purebas y hablarnos un poco mas sobre quien fue se lo agradeceriamos de ante mano.";
    let contenido = document.getElementById("contenido");
    let botones = document.querySelectorAll('.respuesta2');
    let parrafoUSer1="El personal me falto al respeto.";

    

   // parrafo del chat
    let parrafouser = document.createElement("div");
    parrafouser.textContent = parrafoUSer1;
    parrafouser.style.marginTop = '10px';
    parrafouser.style.backgroundColor=' #bcc0c7';
    parrafouser.style.padding='10px';
    parrafouser.style.borderRadius='5px';
     
    contenido.appendChild(parrafouser);
    
  
    // Crear un nuevo elemento de párrafo
    let nuevoParrafo = document.createElement("div");
    nuevoParrafo.textContent = textoPredeterminado;
    nuevoParrafo.style.marginTop = '15px';
    nuevoParrafo.style.backgroundColor='#ffffff';
    nuevoParrafo.style.padding='10px';
    nuevoParrafo.style.borderRadius='5px';
    // el oppendchild es para agregar un contenido html a otro contenido html
    contenido.appendChild(nuevoParrafo);
  
    // Mostrar el conjunto de botones correspondiente a la opción seleccionada
    botones.forEach(boton => {
      boton.style.display = 'none';
    });
    document.getElementById('input').disabled = false;
    document.querySelector('.custom-file-upload').style.display = 'flex'; // Mostrar los botones correspondientes a la opción 1
  }



  //////


  function respuesta3(mensaje) {
    switch (mensaje) {
      case 'Boton 3':
        opcion3();
        break;

      default:
        alert("No esta determinado")
        break;
    }
  }

  function opcion3() {
    let type1 = "Denuncias por parlantes a alto volumen:";
    let textoPredeterminado = "Esta es una muy buena pregunta los diferentes tipos de denuncias brindados son los siguientes: " + 
        "<strong>" + type1 + "</strong>" +
        " Estas se deben realizar cuando una persona, local, vehiculo etc, este utilizando un parlante y este sobrepase el limite de decibeles legalmente, o que simplemente lo tenga por mucho tiempo a fuerte volumen en un area y esto moleste o perturbe la tranquilidad de los vecinos.";

    let contenido = document.getElementById("contenido");
    let botones = document.querySelectorAll('.respuesta1, .respuesta2, .respuesta3');
    let parrafoUSer1 = "¿Cuales son los tipos de denuncias disponibles?";

    // parrafo del chat
    let parrafouser = document.createElement("div");
    parrafouser.textContent = parrafoUSer1;
    parrafouser.style.marginTop = '10px';
    parrafouser.style.backgroundColor = '#bcc0c7';
    parrafouser.style.padding = '10px';
    parrafouser.style.borderRadius = '5px';
    contenido.appendChild(parrafouser);

    // parrafo de respuesta del usuario
    let nuevoParrafo = document.createElement("div");
    nuevoParrafo.innerHTML = textoPredeterminado; 
    nuevoParrafo.style.marginTop = '10px';
    nuevoParrafo.style.backgroundColor = '#ffffff';
    nuevoParrafo.style.padding = '10px';
    nuevoParrafo.style.borderRadius = '5px';
    contenido.appendChild(nuevoParrafo);

    let type12 = "Vehiculos Ruidosos"
    let text2 ="El segundo tipo de denuncia es la problematica que esta en de contra los " +  "<strong>" + type12 + "</strong>" + " Estos pueden llegar a ser fastidisos para los ciudadanos, no esta mal que lo aceleren por momento pero hay personas y grupos los cuales lo hacen continuamente y esto resulta molesto e ilegal."
    let type2 = document.createElement("div");
    type2.innerHTML = text2; 
    type2.style.marginTop = '10px';
    type2.style.backgroundColor = '#ffffff';
    type2.style.padding = '10px';
    type2.style.borderRadius = '5px';
    contenido.appendChild(type2);

    let type13 = "Construcciones fuera de horario"
    let text3 ="El tercer tipo de denuncia es la denuncia en contra de las " +  "<strong>" + type13 + "</strong>" + " Estas construcciones tienes unas horas establecidas legalmente para construir, por lo tanto si se encuentran realizando ruidos molestos fuera de horario seran sancionados y esta es una razon para sancionar."
    let type3 = document.createElement("div");
    type3.innerHTML = text3; 
    type3.style.marginTop = '10px';
    type3.style.backgroundColor = '#ffffff';
    type3.style.padding = '10px';
    type3.style.borderRadius = '5px';
    contenido.appendChild(type3);

    // Mostrar el conjunto de botones correspondiente a la opción seleccionada
    botones.forEach(boton => {
        boton.style.display = 'none';
    });
}
  




  ///opcion 4

  function respuesta4(mensaje) {
    switch (mensaje) {
      case 'Boton 4':
        opcion4();
        break;

      case 'boton4-1': 
        opcion41();
        break;

    case 'boton4-2':
        opcion42()  
      
        break;
    case 'boton4-3':
        opcion43()  
        break;

      default:
        alert("No esta determinado")
        break;
    }
  }

  function opcion4() {
    let textoPredeterminado = "Por supuesto, estamos aquí para ayudarte con la solicitud de tu dispositivo. ¿Podrías indicarnos las razones o problemas que te han llevado a necesitar uno por tu area, para que podamos considerar que haya uno en tu area? ";
    let contenido = document.getElementById("contenido");
    let botones = document.querySelectorAll('.respuesta1, .respuesta2, .respuesta3');
    let parrafoUSer1="Deseo solicitar un dispositivo";

    
     // parrafo del chat
     let parrafouser = document.createElement("div");
     parrafouser.textContent = parrafoUSer1;
     parrafouser.style.marginTop = '10px';
     parrafouser.style.backgroundColor='#bcc0c7';
     parrafouser.style.padding='10px';
     parrafouser.style.borderRadius='5px';
     
     contenido.appendChild(parrafouser);

    // parrafo de respuesta del usuario
    let nuevoParrafo = document.createElement("div");
    nuevoParrafo.textContent = textoPredeterminado;
    nuevoParrafo.style.marginTop = '10px';
    nuevoParrafo.style.backgroundColor='#ffffff';
    nuevoParrafo.style.padding='10px';
    nuevoParrafo.style.borderRadius='5px';
  
    // el oppendchild es para agregar un contenido html a otro contenido html
    contenido.appendChild(nuevoParrafo);
  
    // Mostrar el conjunto de botones correspondiente a la opción seleccionada
    botones.forEach(boton => {
      boton.style.display = 'none';
    });
    document.querySelector('.respuesta4').style.display = 'contents';
    
  }

  //////////////////////////////////////////

   // opcion 1.1
   function opcion41() {
    let textoPredeterminado = "Entendemos su frustración. Lamentamos profundamente cualquier inconveniente que esto haya causado. Nos pondremos en contacto con usted lo antes posible para resolver su situación y mejorar nuestros servicios. Gracias por compartir su preocupación con nosotros.";
    let contenido = document.getElementById("contenido");
    let botones = document.querySelectorAll('.respuesta2');
    let parrafoUSer1="Ruido excesivo provocado por bocinas.";

    

   // parrafo del chat
    let parrafouser = document.createElement("div");
    parrafouser.textContent = parrafoUSer1;
    parrafouser.style.marginTop = '10px';
    parrafouser.style.backgroundColor=' #bcc0c7';
    parrafouser.style.padding='10px';
    parrafouser.style.borderRadius='5px';
     
    contenido.appendChild(parrafouser);
    
  
    // Crear un nuevo elemento de párrafo
    let nuevoParrafo = document.createElement("div");
    nuevoParrafo.textContent = textoPredeterminado;
    nuevoParrafo.style.marginTop = '15px';
    nuevoParrafo.style.backgroundColor='#ffffff';
    nuevoParrafo.style.padding='10px';
    nuevoParrafo.style.borderRadius='5px';
    // el oppendchild es para agregar un contenido html a otro contenido html
    contenido.appendChild(nuevoParrafo);
  
    // Mostrar el conjunto de botones correspondiente a la opción seleccionada
    botones.forEach(boton => {
      boton.style.display = 'none';
    });
    document.querySelector('.respuesta4').style.display = 'none';
    document.getElementById('input').disabled = false;
    document.querySelector('.custom-file-upload').style.display = 'flex';
  }


  ///////////////

  


  function opcion42() {
    let textoPredeterminado = "Comprendemos tu frustración ante la persistencia del problema a pesar de las denuncias anteriores. Agradecemos tu paciencia y queremos asegurarte que estamos trabajando diligentemente para resolver esta situación. ¿Podrías proporcionarnos más detalles para que podamos determinar si el problema requiere un dispositivo en tu area, con datos como tu ubicacion, evidencias, ?";
    let contenido = document.getElementById("contenido");
    let botones = document.querySelectorAll('.respuesta2');
    let parrafoUSer1="Se han realizado muchas denuncias y sigue el problema.";

    

   // parrafo del chat
    let parrafouser = document.createElement("div");
    parrafouser.textContent = parrafoUSer1;
    parrafouser.style.marginTop = '10px';
    parrafouser.style.backgroundColor=' #bcc0c7';
    parrafouser.style.padding='10px';
    parrafouser.style.borderRadius='5px';
     
    contenido.appendChild(parrafouser);
    
  
    // Crear un nuevo elemento de párrafo
    let nuevoParrafo = document.createElement("div");
    nuevoParrafo.textContent = textoPredeterminado;
    nuevoParrafo.style.marginTop = '15px';
    nuevoParrafo.style.backgroundColor='#ffffff';
    nuevoParrafo.style.padding='10px';
    nuevoParrafo.style.borderRadius='5px';
    // el oppendchild es para agregar un contenido html a otro contenido html
    contenido.appendChild(nuevoParrafo);
  
    // Mostrar el conjunto de botones correspondiente a la opción seleccionada
    botones.forEach(boton => {
      boton.style.display = 'none';
    });
    document.querySelector('.respuesta4').style.display = 'none';
    document.querySelector('.custom-file-upload').style.display = 'flex';
    document.getElementById('input').disabled = false;
    

    
  }




  /////////////

  function opcion43() {
    let textoPredeterminado = "Comprendemos tu preocupación por el ruido generado por los negocios locales. Es un problema que tomamos en serio. Vamos a investigar la situación y tomar medidas adecuadas para garantizar que se cumplan las normativas de ruido. ¿Podrías proporcionarnos detalles específicos, como la ubicación y el horario en que esto ocurre con mayor frecuencia?";
    let contenido = document.getElementById("contenido");
    let botones = document.querySelectorAll('.respuesta2');
    let parrafoUSer1="Los negocios locales ya sea colmados, discotecas etc, realizan demasiado ruido.";

    

   // parrafo del chat
    let parrafouser = document.createElement("div");
    parrafouser.textContent = parrafoUSer1;
    parrafouser.style.marginTop = '10px';
    parrafouser.style.backgroundColor=' #bcc0c7';
    parrafouser.style.padding='10px';
    parrafouser.style.borderRadius='5px';
     
    contenido.appendChild(parrafouser);
    
  
    // Crear un nuevo elemento de párrafo
    let nuevoParrafo = document.createElement("div");
    nuevoParrafo.textContent = textoPredeterminado;
    nuevoParrafo.style.marginTop = '15px';
    nuevoParrafo.style.backgroundColor='#ffffff';
    nuevoParrafo.style.padding='10px';
    nuevoParrafo.style.borderRadius='5px';
    // el oppendchild es para agregar un contenido html a otro contenido html
    contenido.appendChild(nuevoParrafo);
  
    // Mostrar el conjunto de botones correspondiente a la opción seleccionada
    botones.forEach(boton => {
      boton.style.display = 'none';
    });
    document.querySelector('.respuesta4').style.display = 'none';
    document.getElementById('input').disabled = false;
    document.querySelector('.custom-file-upload').style.display = 'flex'; // Mostrar los botones correspondientes a la opción 1
  }





  /// funcion de enviar
  function enviar1(event) {
    event.preventDefault();
    
    let form = document.getElementById("form");
    let input = document.getElementById("input");
    let contenido = document.getElementById("contenido");
    let parrafoUSer1 = "Gracias por su denuncia, en breve nos pondremos en contacto con usted. Agradecemos su  que denuncie y lo sentimos por los hechos ocurridos. En breves enviaremos su formulario.";
    let parrafouser = document.createElement("div");
    let parrafoUSer11 = input.value;

    // Parrafo del chat
   

    if (input.value === "") {
        alert("No has llenado el formulario");
        return false; 
    } else if (input.value.length < 30) {
        alert("Esta denuncia está muy poco detallada, detalle más su denuncia para ser considerado.");
        return false; 
    } else {
      let parrafouser1 = document.createElement("div");
      parrafouser1.textContent = parrafoUSer11;
      parrafouser1.style.marginTop = '10px';
      parrafouser1.style.backgroundColor = '#bcc0c7';
      parrafouser1.style.padding = '10px';
      parrafouser1.style.borderRadius = '5px';
  
      contenido.appendChild(parrafouser1);

      
      // este es para el estilo de la respuesta que el chat dara a lo que escribas
        parrafouser.textContent = parrafoUSer1;
        parrafouser.style.marginTop = '10px';
        parrafouser.style.backgroundColor = '#bcc0c7';
        parrafouser.style.padding = '10px';
        parrafouser.style.borderRadius = '5px';
        contenido.appendChild(parrafouser);
       
        
        setTimeout(function() {
          document.getElementById("form").submit();
      }, 5000);
    }
}







  









  
 

  

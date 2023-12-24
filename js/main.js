const enviarWhats = document.querySelectorAll(".enviar");

enviarWhats.forEach((enviar) => {
  enviar.addEventListener("click", enviarFormulario);
});

function enviarFormulario() {
  let nombre = document.querySelector("#nombre").value;
  let apellidos = document.querySelector("#apellidos").value;
  let apoderado = document.querySelector("#apoderado").value;
  let telefono = document.querySelector("#telf").value;
  let correo = document.querySelector("#correo").value;
  let nivelacademico = document.querySelector("#nivel-academico").value;
  let numero = "5199999999";
  if (
    nombre.length == 0 ||
    apellidos.length == 0 ||
    apoderado.length == 0 ||
    telefono.length == 0 ||
    nivelacademico.length == 0
  ) {
    console.log("no tengo nada soy vacion");
    // Asignar texto al elemento de párrafo
    alert("Debes srellenar todos los campos");
  } else {
    let mensaje = `HOLA QUIERO NECESITO MAS INFORMES \nNombre: ${nombre}\nApellidos: ${apellidos}\nApoderado: ${apoderado}\nTeléfono: ${telefono}\nCorreo: ${correo}\nNivel Académico: ${nivelacademico}`;
    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
    console.log("Mensaje enviado");
  }
}
//para la galeria de fotos del index
let sliderInner = document.querySelector(".slider--inner");
let index = 1;

setInterval(function () {
  let imagenes = sliderInner.querySelectorAll("img");
  let porcentaje = index * -100;
  sliderInner.style.transform = "translateX(" + porcentaje + "%)";
  index++;

  if (index > imagenes.length - 1) {
    index = 0;
  }
}, 2100);

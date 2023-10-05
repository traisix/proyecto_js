var boton       = document.getElementById("agregar");
var botonImagen = document.getElementById("agregarImagen");
var entrada     = document.getElementById("entradaUsuario");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function longitudEntrada() {
    return entrada.value.length;
}
function crearElementoLista() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(entrada.value));
  ul.appendChild(li);
  entrada.value = "";

  //Acciona la funcion de tachar
  var botonHecho = document.createElement("button");
  botonHecho.appendChild(document.createTextNode("¡Hecho!"));
  botonHecho.classList.add("btn1");
  li.appendChild(botonHecho);
  //subraya el elemento seleccionado
  botonHecho.onclick = subrayarPadre;

  // CREAR UN ELEMENTO
  var botonEliminar = document.createElement("button");
  // AGREGAR TEXTO AL BOTÓN
  botonEliminar.appendChild(document.createTextNode(" X "));
  botonEliminar.classList.add("btn1");
  // AGREGAR BOTÓN A LA LISTA
  li.appendChild(botonEliminar);

  botonEliminar.onclick = eliminarPadre;
}

/// Probando lo de las imagenes!

function agregarImagenALista() {
  var li = document.createElement("li");
  if (entrada.value.startsWith("http")) {
    var imagen = document.createElement("img");
    imagen.src = entrada.value;
    li.appendChild(imagen);
    ul.appendChild(li);
    entrada.value = "";
  } else {
    alert("Porfavor ponga una URL de imagen!.");
  }
}

function subrayarPadre(evento) {
  evento.target.parentNode.classList.toggle("done");
}

function eliminarPadre(evt) {
  evt.target.parentNode.remove();
}

function agregarListaDespuesDeClick(evento) {
  if (longitudEntrada() > 0) {
    if (evento.target === boton) {
      crearElementoLista();
    } else if (evento.target === botonImagen) {
      agregarImagenALista();
    }
  }
}

function agregarListaDespuesDePresionar(evento) {
  if (longitudEntrada() > 0 && evento.keyCode === 13) {
    crearElementoLista();
  }
}

boton.addEventListener("click", agregarListaDespuesDeClick);
botonImagen.addEventListener("click", agregarListaDespuesDeClick);
entrada.addEventListener("keypress", agregarListaDespuesDePresionar);

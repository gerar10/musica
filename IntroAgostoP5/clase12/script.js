console.log("hola mundo");

// 3 puntos claves
// 1 - que elemento va a reaccionar
// 2 - ante que va a reaccionar
// 3 - que vamos a hacer

// guardamos el elemento

// let h2 = document.querySelector("h2")

// // como agregamos un evento
// h2.addEventListener("click", function () {
//     console.log("alquien hizo click");
// })

// primer argumento es un string en este caso un click
// segundo argumento es la funcion que se ejecuta cuando sucede ese evento

// Los eventos mas comunes
//  onchange	    Modificación de un elemento HTML
//  onclick	        Usuario hace click sobre un elemento HTML
//  mouseover	    Usuario mueve el mouse sobre un elemento HTML
//  mouseleave	    Usuario quita el mouse del elemento HTML
//  keydown	        Usuario presiona una tecla
//  load	        Browser termina de cargar la página

// let boton = document.querySelector("button")
// let parrafo = document.querySelector("p")

// boton.addEventListener("click", cambiarTexto)

// function cambiarTexto() {
//     parrafo.textContent = "ahora alguien hizo click y se activo el elemento"
//     parrafo.style.backgroundColor = "red"
//     parrafo.style.fontSize = "40px"
// }

// let input = document.querySelector("input")

// input.addEventListener("keydown", function (e) {
//     console.log(e, "Este es el evento ");
//     document.querySelector("#string").textContent = e.code
// })

// let body = document.querySelector("body");

// body.addEventListener("click", function (e) {
//   // console.log(e);
//   console.log(`X: ${e.clientX} Y: ${e.clientY}`);
// });

// VARIOS ELEMENTOS

let lis = document.querySelectorAll(".profesores > li");

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function () {
    this.style.color = "red";
    this.style.fontSize = "40px";
  });
}

let h3 = document.getElementById("hola")


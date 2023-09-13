console.log("Hola mundo");

// nivel 1
// 1 ejercicio 
// let divMagia = document.querySelector("#magia")
// let body = document.querySelector("body")

// divMagia.addEventListener("mouseover", function () {
//     body.removeChild(divMagia)
// })

// ejercicio 2 

// let boton = document.querySelector("button")
// let body = document.querySelector("body")

// boton.addEventListener("click", seEjecutaElEvento)


// function seEjecutaElEvento() {
//     let parrafo = document.createElement("p")
//     parrafo.textContent = "BEEP"
//     body.appendChild(parrafo)
//     body.classList.toggle("color")
// }


let body = document.querySelector("body")
let raton = document.querySelector("img")

body.addEventListener("mousemove", function(e) {
    console.log(e);
    raton.style.top = e.clientY+"px"
    raton.style.left = e.clientX+"px"

})


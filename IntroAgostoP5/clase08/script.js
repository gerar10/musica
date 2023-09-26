console.log("Hola Mundo");

// --------SINTAXIS DEL WHILE LOOP --------------
// while (condition) {
//     // codigo que se va ejecutar
//     // condicion de corte
// }

// --------EJEMPLO DE WHILE ------------------
// let contarNumeros = 20;

// while (contarNumeros >= 1) {
//     console.log(`este es el numero ${contarNumeros}`);
//     contarNumeros -= 2
// }

// SINTAXIS
// ++  => te suma una unidad
// -- => te resta una unidad
// += => te suma la cantidad indicada
// -= => te resta la cantidad indicada

// ----------WHILE CON STRING ------------------
// let intento = prompt("CUAL ES LA PALABRA?").toLowerCase()
// let palabraAdivinar = "cuaderno"

// while (intento != palabraAdivinar) {
//     alert("la palabra es incorrect")
//     intento = prompt("CUAL ES LA PALABRA?")
// }

// alert("muy bien adivinaste")

// -----------VARIABLES ACUMULADORAS------------------
// let i = 1;
// let final = 5;
// let acumulador = 0;

// while (i <= final) {
//   acumulador += i;
//   console.log(acumulador);
//   i++;
// }

// console.log(acumulador);

// primera vuelta sería acumulador = 0 + 1;
// segunda, acumulador = 1 + 2;
// tercera acumulador = 3 + 3;
// cuarta acumulador = 6 + 4 y;
// quinta acumulador = 10 + 5
// el valor final de la variable acumulador es 15

// ---------------LOOPS ANIDADOS--------------

// let i = 1;
// let j = 1;
// let final = 5;

// while (i <= final) {
//   j = 1;
//   while (j <= final) {
//     console.log(i + " - " + j);
//     j++;
//   }
//   i++;
// }

// -------------------OBJETO MATH---------------
// Math.E -obtener el numero e
// Math.pow(3,2) - para hacer potencia
// Math.random() - un valor aleatorio entre 0 y 1
//

// if (Math.random() < 0.5) {
//     console.log("cara");
// } else {
//     console.log("seca");
// }

// Math.floor() - reondea hacia abajo
// Math.ceil() - redonde hacia arriba
// Math.round() - redondea

// Math.ceil(Math.random() * 10) - numeros aleatorios entre 1 y 10

// -------PROYECTO -----------------
// MANIPULACION DEL DOM

// -----MANIPULAR TEXTOS
// textContent = para cambiar el texto
// innerHTML = cambiar el tipo de etiqueta y el texo

// -----MANIPULAR ETIQUETAS
// getAttribute("src") - obtener el valor de un atributo
// setAttribute("src", "valor") - cambiamos el atributo

// EJERCICIOS NIVEL 1

// ESCRIBI WHILE LOOPS
// let contador = 5;
// let final = 50;

// while (contador <= final) {
//   if (contador % 5 == 0 && contador % 3 == 0) {
//     console.log(contador);
//   }
//   contador++;
// }

// MI PRIMER "BOT"
// let cliente = 1

// while (cliente <= 20) {
//     console.log(`¡Bienvenid@ a mi café! Su mesa es la ${cliente}`);
//     cliente ++
// }

// EJERCICIOS NIVEL 2

// PAR O IMPAR
// let respuestaUsuario = parseInt(prompt("elegi un numero"))

// while (respuestaUsuario > 0) {
//     if (respuestaUsuario % 2 == 0) {
//         console.log("par");
//     } else {
//         console.log("impar");
//     }
//     respuestaUsuario = parseInt(prompt("elegi un numero"))
// }

// alert("se termino el while")

// CONTADOR DE POSITIVOS
// let respuestaUsuario = parseInt(prompt("ingresar un numero"));

// let numerosPositivos = 0;

// while (respuestaUsuario >= 0) {
//   respuestaUsuario = parseInt(prompt("ingresar un numero"));
//   numerosPositivos++;
// }

// alert(`la cantidad de numeros positivos fueron ${numerosPositivos}`)

// BURRO-MATICO
// let respuestaUsuario = prompt("ya merito llegamos").toLowerCase()

// while (respuestaUsuario != "si") {
//     respuestaUsuario = prompt("ya merito llegamos")
// }

// alert("bienvenido a muy muy lejano")

// let nombreSw;

// async function solicitarNombre() {
//   try {
//     nombreSw = await swal("¿Como te llamas?", {
//       content: "input",
//     });
//     while (nombreSw.length <= 3) {
//       nombreSw = await swal("Ingresa un nombre valido", {
//         content: "input",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// solicitarNombre();

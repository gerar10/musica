console.log("Hola mundo");

// REPASO DE JAVASCRIPT

// TIPOS DE DATOS
// number => 5, 10 , 3.14
// boolean =>  True - False
// null => intencionalmente vacia
// undefined => no esta definida
// String => "casa" `casa`

// VARIABLES
// let data = "informacion"
// const data1 = 587

// CONDICIONALES

// let numero = 500

// if ( numero < 900) {
//     console.log("La condicion dio true y se ejecuto");
// } else {
//     console.log("La condicion dio false y se ejecuta aca");
// }

// let edad = prompt("Ingrese su edad.");

// if (edad < 18) {
//   alert("No puede pasar al bar.");
// } else if (edad < 21) {
//   alert("Puede pasar al bar, pero no puede tomar alcohol.");
// } else {
//   alert("Puede pasar al bar y tomar alcohol.");
// }

// OPERADORES LOGICOS Y DE COMPARACION
// MENOR < MAYOR
// MAYOR > MENOR
//  == IGUALDAD DE CONTENIDO
// === IGUALDAD ESTRICTA
// <= MENOR IGUAL
// >= MAYOR IGUAL
// != DESIGUALDAD BLANDA
// !== DESIGUALDAD ESTRICTA

// && AND
// TRUE && TRUE = TRUE
// TRUE && FALSE = FALSE
// FALSE && TRUE = FALSE
// FALSE && FALSE = FALSE

// || OR
//  TRUE || TRUE = TRUE
//  TRUE || FALSE = TRUE
//  FALSE || TRUE = TRUE
//  FALSE || FALSE = FALSE

//  WHILE - LOOP

// let numero = 20

// while ( numero < 50) {
//     console.log(numero);
//     numero ++ // condicion de corte
// }

// FUNCIONES

// console.log("que los cuplas feliz ");
// console.log("que los cuplas feliz ");
// console.log("que los cuplas feliz ");
// console.log("que los cuplas feliz, Mario ");
// console.log("que los cuplas feliz ");

// definimos una funcion
// function cantarCumple() {
//     let resultado = prompt("cual es tu edad")
//     console.log(resultado);
// }

// llamar la funcion o ejecutarla
// cantarCumple("Marcelo")
// cantarCumple("Matias")
// cantarCumple("Julaina")
// cantarCumple("Carla")

// let nombre = prompt('Decinos tu nombre')

// function cantarCumple(pepito) {
//     console.log('Que los cumplas feliz');
//     console.log('Que los cumplas feliz');
//     console.log(`Que los cumplas feliz, ${pepito}`);
//     console.log('Que los cumplas feliz');
// }

// cantarCumple(nombre)

// function sumar(numero1, numero2) {
//   return numero1 + numero2;
// }

// let resultado = sumar(10, 50);

// ARREGLOS
// TIPO DE DATO - COMPLEJO

// let peliculas = ["matrix", "gladiador", "Flash", "Avengers", 80, 50, "casa"]

// push() Y pop()
//peliculas.push("camion") // agrega un elemento al final del arreglo
//peliculas.pop() // quita el ultimo elemento del arreglo

// unshift() y shift()
// peliculas.unshift("principio")
// peliculas.shift()

// FILTER
// let notas = [20, 14, 37, 49, 10, 7, 6, 4, 8, 10];

// let aprobadas = notas.filter((nota) => nota >= 6);
// let desaprobadas = notas.filter((nota) => nota == 10)

// FOR LOOP - v a repetir una tarea o ejectuar codigo
// console.log(notas[0]);
// console.log(notas[1]);
// console.log(notas[2]);
// console.log(notas[3]);
// ...

// for (let index = 0; index < notas.length; index++) {
//     console.log(notas[index]);
// }

// FOREACH

// OBJETOS - dato complejo

// let objeto = {
//     clave1: "Valor1",
//     clave2: "Valor2"
// }

// let persona1 = ["juliana", 35, "Buenos Aires"];

// for (let i = 0; i < persona1.length; i++) {
//     console.log(persona1[i]);
//   }

let persona = {
  nombre: "juliana",
  edad: 35,
  provincia: "buenos aires",
  saludo: () => {
    console.log("Hola");
  },
  prueba: ["juliana", 35, "Buenos Aires"],
};


// persona.direccion = "Rivadavia"
// persona.nombre = "Carla"

// for (let i = 0; i < persona1.length; i++) {
//     console.log(persona1[i]);
//   }

// DOT Y BRACKET NOTATION - . []
// persona.nombre; // DOT
// persona["provincia"]; // BRACKET

// LIMITACIONES DOT NO ACEPTA VARIABLES
// let name = "nombre";

// FOR ... IN (LOOP) RECORRER OBJETOS

// for (const key in persona) {
// //    console.log(key, " ====  esto son las key");
//    console.log(persona[key], "===== estas son las propiedades");
// }




console.log("Hola mundo");

//  OBJETOS ( TIPO DE DATO)

// let persona = {
//   nombre: "Mario",
//   apellido: "Gonzalez",
//   trabajo: "Plomero",
//   edad: 25,
// };

// Arreglos vs Objetos

// let persona1 = [
//   "violeta",
//   21,
//   "Buenos Aires",
//   function () {
//     console.log("hola");
//   },
// ];

// let persona2 = {
//   nombre: "Violeta",
//   edad: 21,
//   ciudadNatal: "Buenos Aires",
//   saludar: function () {
//     console.log("Hola");
//   },
// };

// Dot (. = puntos)y Bracket ([] = corchetes)

// let auto = {
//     marca: "Tesla",
//     modelo: "Model Y",
//     kilometros: 0,
//     nuevo: true,
//     arrancar: function () {
//       alert("el auto se enciende!");
//     },
//   };

// DOT .
// auto.marca
// auto.arrancar()

// Bracket []

// auto["marca"]
// auto["modelo"]
// auto["arrancar"]()

// Ventajas y limitaciones

// DOT:
// 1- no acepta variables
// 2- no podemos acceder que tengan propiedad con espacio o numeros

// let auto = {
//     marca: "Tesla",
//     "1er service": "10000 km",
//     "pais de origen": "Estados Unidos",
//   };

// let acceso = "marca";
// auto[acceso];

// let auto1 = {
//   marca: "Tesla",
//   primerService: "10000 km",
//   paisDeOrigen: "Estados Unidos",
// };

// MODIFICAR OBJETOS

// let heroe = {
//   nombre: "mario",
//   trabajo: "plomero",
// };

// heroe["nombre"] = "Luis";
// heroe.trabajo = "Carpintero";

// agregar una propiedad

// heroe.nacionalidad = "argentino";
// heroe["provincia"] = "La pampa";

// MODIFICAR OBJETOS VACIOS

// let perro = {};
// perro.nombre = "firulais";
// perro["edad"] = 6;
// perro["ladrar"] = function () {
//   alert("cuidado perro malo");
// };
// perro["amigos"] = ["tom", "jerry", "caniche"];

// OBJETOS DENTRO DE ARREGLOS

// let auto = {
//   marca: "Tesla",
//   modelo: "Model Y",
//   kilometros: 0,
//   nuevo: true,
//   arrancar: function () {
//     alert("el auto se enciende!");
//   },
//   partes: [
//     { nombre: "bateria", estado: "nuevo" },
//     { nombre: "motor", estado: "nuevo" },
//   ],
// };

// auto.partes[0].nombre
// auto.partes[0].estado

// COMO ITERAR UN OBJETO - FOR ... IN

// let nuevaHeroina = {
//   nombreAvenger: "capitana marvel",
//   nombreHumano: "carol danvers",
//   poder: "ser archi fuerte y volar por el espacio",
// };

// console.log(nuevaHeroina.nombreAvenger)
// console.log(nuevaHeroina.nombreHumano)
// console.log(nuevaHeroina.poder)

// for (const propiedad in nuevaHeroina) {
//     // console.log(propiedad);
//     // console.log(nuevaHeroina[key]);
//     console.log(`${propiedad}: ${nuevaHeroina[propiedad]} esta es la opcion1`);
//     console.log( propiedad + ": " + nuevaHeroina[propiedad] + " esta es la opcion2");
// }

// EJERCICIOS
// 1- registro de P5

// let alumnoP5 = {
//     usuario: "Juan",
//     edad: 23,
//     direccion: "rivadavia 876",
//     fechaDeNacimiento: "25/05/1987",
//     contrasenia: "123456"
// }

// 2 - VARIABLE AUTO
// let propertyKey = "modelo"
// let anotherPropertyKey = "precio"
// let nextProperty = "color"

// let miAuto = {}
// miAuto.marca = "Chevrolet" // dot (.)
// miAuto["anio"] = 2018
// miAuto["nuevo"] = false
// miAuto[propertyKey] = "descapotable"
// miAuto[anotherPropertyKey] = 15000
// miAuto[nextProperty] = "rojo"

// for (const key in miAuto) {
//     console.log(`la clave es: ${key} y el valor es ${miAuto[key]}`);
// }

// NIVEL 2

// 1- AUMENTAR LA NOTA

// let notasAlumnos = [
//   { Estudiante: "Juan", nota: 6 },
//   { Estudiante: "Mario", nota: 8 },
//   { Estudiante: "Julia", nota: 10 },
//   { Estudiante: "Sofia", nota: 2 },
// ];

// notasAlumnos.forEach((alumno) => {
//     if (alumno["nota"] >= 5 && alumno["nota"] <= 8) {
//         alumno["nota"] += 2
//     }
// })

// for (let i = 0; i < notasAlumnos.length; i++) {
//     console.log(i, "esta es la i");
//     console.log(notasAlumnos[i], "esta es lo que quiero ver");
//   if (notasAlumnos[i]["nota"] >= 5 && notasAlumnos[i]["nota"] <= 8) {
//     notasAlumnos[i]["nota"] += 2;
//   }
// }

// 2 - Base de datos peliculas

// let peliculas = [
//     {
//         titulo: "busqueda implacable",
//         rating: 5,
//         loHasVisto: "viste"
//     },
//     {
//         titulo: "Norbit",
//         rating: 3,
//         loHasVisto: "no viste"
//     },
//     {
//         titulo: "mini espias",
//         rating: 2,
//         loHasVisto: "viste"
//     },
//     {
//         titulo: "la vida es bella",
//         rating: 5,
//         loHasVisto: "no viste"
//     },
// ]

// Viste "Busqueda implacable" - 5 estrellas
// No viste "Norbit" - 3 estrellas
// Viste "Mini espías" - 2 estrellas
// No viste "La vida es bella" - 5 estrellas

// for (let i = 0; i < peliculas.length; i++) {
//     console.log(`${peliculas[i].loHasVisto} "${peliculas[i].titulo}" - ${peliculas[i].rating} estrellas`);
// }

// NIVEL 3
// DESAFIO + 27

// let personas = [
//   { nombre: "Ana", edad: "28" },
//   { nombre: "María", edad: "24" },
//   { nombre: "José", edad: "31" },
// ];

// let personasConMasDe27 = personas.filter((alumno) => {
//     return alumno.nombre === "Ana"
// })

// NIVEL 4 (TIENEN SOLUCIÓN EN PLEDU)

// NIVEL 5

// function contarCaracteres(palabra) {
//   let objeto = {};
//   for (let i = 0; i < palabra.length; i++) {
//       let letra = palabra[i];
//     if (objeto[letra]) {
//       objeto[letra] += 1;
//     } else {
//       objeto[letra] = 1;
//     }
//   }
//   return objeto;
// }

// let result1 = contarCaracteres("banana");
// console.log('should log "{b: 1, a: 3, n: 2}":', result1);
// let result2 = contarCaracteres("");
// console.log('should log "{}":', result2);
// let result13 = contarCaracteres("pepe");

// COMO CREAR Y AGREGAR ELEMENTOS AL HTML
// let h2 = document.createElement("h2");
// h2.textContent = "tambien vimos como iterar un objeto";
// let div = document.createElement("div");

// AGREGAR AL HTML -
// div.appendChild(h2); // PRIMERO EL PADRE Y DESPUES SE LE INDICA EL HIJO
// document.body.appendChild(div); // SE AGREGA AL HTML

// console.log("Hello world");

let h2 = document.querySelector("h2");
let imagen = document.querySelector("img");
let boton = document.querySelector("button");

function generateId() {
  let numeroAleatorio = Math.ceil(Math.random() * 500);
  return numeroAleatorio;
}

async function getPokemon() {
  let id = generateId();
  try {
    const respuesta = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    console.log(respuesta);
    h2.textContent = respuesta.data.name;
    let urlImagen = respuesta.data.sprites.other.dream_world.front_default;
    imagen.setAttribute("src", urlImagen);
  } catch (error) {
    console.log(error);
  }
}

boton.addEventListener("click", () => {
  getPokemon();
});



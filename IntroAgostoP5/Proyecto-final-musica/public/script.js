// const favoriteRecords = ["disco2"];

// function addFavorites(favorites) {
//   const imgs = document.querySelectorAll(".albums img");
//   imgs.forEach((img) => {
//     if (favorites.includes(img.alt)) {
//       const icon = document.createElement("i");
//       icon.classList.add("fa-solid");
//       icon.classList.add("fa-star");
//       icon.classList.add("favoritos");
//       img.parentNode.appendChild(icon);
//       img.parentElement.classList.add("favorite");
//     }
//   });
// }

// addFavorites(favoriteRecords);

const divAlbums = document.querySelector(".albums");

const renderAlbums = (album) => {
  const div = document.createElement("div");
  const imgAlbum = document.createElement("img");

  div.classList.add("albums");
  // let urlPortada = album.portada
  let urlPortada = album.portada ? album.portada : 'https://imgur.com/0uSALUr.png'
  imgAlbum.setAttribute("src", urlPortada);

  div.appendChild(imgAlbum);
  divAlbums.appendChild(div);
};

const getAlbums = async () => {
  try {
    const response = await axios.get("http://localhost:3000/album/todos");
    response.data.map((album) => {
      console.log(album, "=====");
      renderAlbums(album);
    });
  } catch (error) {
    console.log(error);
  }
};

getAlbums();

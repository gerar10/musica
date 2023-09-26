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

const redirect = (id) => {
  window.location.href = `../Album/Album.html?album=${id}`;
};

const divAlbums = document.querySelector(".albums");

const renderAlbums = (album) => {
  const div = document.createElement("div");
  const imgAlbum = document.createElement("img");
  const iconTrash = document.createElement("i");

  div.classList.add("albums-individual");
  // let urlPortada = album.portada
  let urlPortada = album.portada
    ? album.portada
    : "https://imgur.com/0uSALUr.png";
  imgAlbum.setAttribute("src", urlPortada);
  iconTrash.classList.add("fas");
  iconTrash.classList.add("fa-trash-alt");
  iconTrash.classList.add("trash");

  // agregamos un addEvenListener
  imgAlbum.addEventListener("click", () => {
    redirect(album._id);
  });
  div.appendChild(imgAlbum);
  div.appendChild(iconTrash);
  divAlbums.appendChild(div);
};

const getAlbums = async () => {
  try {
    const response = await axios.get("../../album/todos");
    response.data.map((album) => {
      renderAlbums(album);
    });
    const trash = document.querySelectorAll("i");
    for (let i = 0; i < trash.length; i++) {
      trash[i].addEventListener("click", () => {
        deleteAlbum(response.data[i]._id);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

getAlbums();

const deleteAlbum = async (album) => {
  try {
    await axios.delete(`../../album/${album}`);
    await swal("album eliminado correctamente");
    const albums = document.querySelectorAll(".albums-individual");
    albums.forEach((album) => album.remove());
    const response = await axios.get("../../album/todos");
    response.data.map((album) => {
      renderAlbums(album);
    });
  } catch (error) {
    console.log(error);
  }
};

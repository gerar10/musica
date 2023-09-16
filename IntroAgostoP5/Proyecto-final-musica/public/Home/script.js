const favoriteRecords = ["disco2"];

function addFavorites(favorites) {
  const imgs = document.querySelectorAll(".albums img");
  imgs.forEach((img) => {
    if (favorites.includes(img.alt)) {
      const icon = document.createElement("i");
      icon.classList.add("fa-solid");
      icon.classList.add("fa-star");
      icon.classList.add("favoritos");
      img.parentNode.appendChild(icon);
      img.parentElement.classList.add("favorite");
    }
  });
}

addFavorites(favoriteRecords)
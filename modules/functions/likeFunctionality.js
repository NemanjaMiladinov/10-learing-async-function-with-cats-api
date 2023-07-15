import { defaultElementPosition } from "../animation/animation.js";

import { likeCheck } from "./likeCheck.js";

// array for controling liked elements
let likesState = [];

const getLikedNames = () => {
  return likesState;
};

const clearLikes = () => {
  likesState = [];
};

const likeEvent = (apiData) => {
  console.log("like function executed");

  const like = document.querySelector(".like");

  // ELEMENTI ZA KREIRANJE ...
  const likedCatsElement = document.querySelector(".liked-cat-animation");

  // Kreiraj ostale elemente
  const parrentElement = document.createElement("div");
  parrentElement.classList.add("liked-cat__parrent");

  // create image element
  const likedCatImage = document.createElement("img");
  likedCatImage.setAttribute("src", apiData.image_link);
  likedCatImage.classList.add("liked-cats__img");

  // create h1 cat name element
  const catName = document.createElement("h1");
  catName.classList.add("favorite-cat-name");
  catName.textContent = apiData.name;
  catName.setAttribute("value", "liked");

  // create delete icon
  const removeFavorite = document.createElement("span");
  removeFavorite.classList.add("material-symbols-outlined", "delete-favorite");
  removeFavorite.textContent = "delete";

  // event listener for liking cats
  like.addEventListener("click", function (e) {
    // Dodaj sve elemente u parrent element
    parrentElement.append(likedCatImage, catName, removeFavorite);

    // Dodaj parrent element u likedCatsElement
    likedCatsElement.appendChild(parrentElement);
    likesState.push(catName.textContent);

    defaultElementPosition();

    likeCheck();
  });
};

export { likeEvent, getLikedNames, clearLikes };

import { defaultElementPosition } from "../animation/animation.js";

import { likeWarningSameCat } from "../modals/likeWarningSameCat.js";
import { openDeleteModal } from "./openDeleteModal.js";
import { likeCheck } from "./likeCheck.js";
import { deleteItems } from "./deleteFavoriteCat.js";

// like button reference
const like = document.querySelector(".like");
like.addEventListener("click", function (e) {
  console.log("like function executed");

  // html elements
  const catNameEl = document.querySelector(".cat-name");
  const catNameImgEl = document.querySelector(".cat-img");

  // parrent element for render
  const likedCatsElement = document.querySelector(".liked-cat-animation");

  // Kreiraj ostale elemente
  const parrentElement = document.createElement("div");
  parrentElement.classList.add("liked-cat__parrent");

  // create image element
  const likedCatImage = document.createElement("img");
  likedCatImage.setAttribute("src", catNameImgEl.src);
  likedCatImage.classList.add("liked-cats__img");

  // create h1 cat name element
  const catName = document.createElement("h1");
  catName.classList.add("favorite-cat-name");
  catName.textContent = catNameEl.textContent;
  catName.setAttribute("value", "liked");

  // create delete icon
  const removeFavorite = document.createElement("span");
  removeFavorite.classList.add("material-symbols-outlined", "delete-favorite");
  removeFavorite.textContent = "delete";

  /*
    if there is a cat with the name that already exist,
    return true from this function , if true , return
    to stop appending new elements ...
  */

  if (likeCheck(catName)) {
    return;
  }

  /* if its not true , continue with appending ... */

  // Dodaj sve elemente u parrent element
  parrentElement.append(likedCatImage, catName, removeFavorite);
  likedCatsElement.append(parrentElement);

  // removeFavorite is icon html element , event is atached to that element
  openDeleteModal(removeFavorite);
  deleteItems(removeFavorite);
  defaultElementPosition();
});
function fireLikeEvent() {
  console.log("this function is for triggering like event");
}
export { fireLikeEvent };

import { defaultElementPosition } from "../animation/animation.js";
import { reciedDataState } from "../api/apiCall.js";
import { deleteItems } from "./deleteItems.js";
// import { deleteItems } from "./deleteItems.js";
import { likeCheck } from "./likeCheck.js";

let likesState = [];

const getLikedNames = () => {
  return likesState;
};

const clearLikes = () => {
  likesState = [];
};

// like button reference
const like = document.querySelector(".like");
like.addEventListener("click", function (e) {
  console.log("like function executed");
  // html elements
  const catNameEl = document.querySelector(".cat-name");
  const catNameImgEl = document.querySelector(".cat-img");

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

  // Dodaj sve elemente u parrent element
  parrentElement.append(likedCatImage, catName, removeFavorite);
  // Dodaj parrent element u likedCatsElement
  likedCatsElement.appendChild(parrentElement);
  likesState.push(catName.textContent);

  likeCheck();
  deleteItems(removeFavorite);
  defaultElementPosition();
  console.log(getLikedNames());
});
function fireLikeEvent() {
  console.log("this function is for triggering like event");
}
export { fireLikeEvent, getLikedNames, clearLikes };
// array for controling liked elements
// let likesState = [];

// const getLikedNames = () => {
//   return likesState;
// };

// const clearLikes = () => {
//   likesState = [];
// };

// const likeEvent = (apiData) => {
//   console.log("like function executed");

//   const likedCatsElement = document.querySelector(".liked-cat-animation");

//   // Kreiraj ostale elemente
//   const parrentElement = document.createElement("div");
//   parrentElement.classList.add("liked-cat__parrent");

//   // create image element
//   const likedCatImage = document.createElement("img");
//   likedCatImage.setAttribute("src", apiData.image_link);
//   likedCatImage.classList.add("liked-cats__img");

//   // create h1 cat name element
//   const catName = document.createElement("h1");
//   catName.classList.add("favorite-cat-name");
//   catName.textContent = apiData.name;
//   catName.setAttribute("value", "liked");

//   // create delete icon
//   const removeFavorite = document.createElement("span");
//   removeFavorite.classList.add("material-symbols-outlined", "delete-favorite");
//   removeFavorite.textContent = "delete";

//   // Dodaj sve elemente u parrent element
//   parrentElement.append(likedCatImage, catName, removeFavorite);
//   // Dodaj parrent element u likedCatsElement
//   likedCatsElement.appendChild(parrentElement);
//   likesState.push(catName.textContent);

//   // deleteItems(removeFavorite);
//   // defaultElementPosition();
// };

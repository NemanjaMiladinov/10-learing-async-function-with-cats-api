import { defaultElementPosition } from "../animation/animation.js";
import { reciedDataState } from "../api/apiCall.js";
import { likeWarningSameCat } from "../modals/likeWarningSameCat.js";
import { deleteItems } from "./deleteItems.js";

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

  // Da li postoje duplikati ?
  /*
    Kada zelim da nodelist prebacim u niz , koristim
    Array.from() metodu . Ako zelim jos nesto 
    da dobijem iz tog niza mogu da nastavim dalje sa .
    i da koristim map i izvucem jos informacija iz niza ...
  
  */
  const favoritesCatsNames = Array.from(
    document.querySelectorAll(".favorite-cat-name")
  ).map((element) => element.textContent);

  if (favoritesCatsNames.includes(catName.textContent)) {
    console.log("Postoji duplikat u imenima mačaka.");
    likeWarningSameCat();
    return;
  }

  // Dodaj sve elemente u parrent element
  parrentElement.append(likedCatImage, catName, removeFavorite);
  likedCatsElement.append(parrentElement);

  deleteItems(removeFavorite);
  defaultElementPosition();
});
function fireLikeEvent() {
  console.log("this function is for triggering like event");
}
export { fireLikeEvent };

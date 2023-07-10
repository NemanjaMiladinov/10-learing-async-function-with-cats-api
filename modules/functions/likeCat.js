import {
  defaultElementPosition,
  slideInAnimation,
  slideOutAnimation,
} from "../animation/animation.js";
import { likeWarningSameCat } from "../modals/likeWarningSameCat.js";

function likeCat(name, imageLink) {
  const likedCatsElement = document.querySelector(".liked-cat-animation");
  const like = document.querySelector(".like");

  like.addEventListener("click", function (e) {
    console.log("clicked on hearth to like cat");

    // Da li postoji element sa istim imenom ?
    const existingElements =
      likedCatsElement.querySelectorAll(`.favorite-cat-name`);
    for (let i = 0; i < existingElements.length; i++) {
      const existingElement = existingElements[i];
      if (
        existingElement.getAttribute("value") === "liked" &&
        existingElement.textContent === name
      ) {
        // if user like the same cat
        likeWarningSameCat();
        return;
      }
    }

    // Kreiraj ostale elemente
    const parrentElement = document.createElement("div");
    parrentElement.classList.add("liked-cat__parrent");

    const likedCatImage = document.createElement("img");
    likedCatImage.setAttribute("src", imageLink);
    likedCatImage.classList.add("liked-cats__img");

    const catName = document.createElement("h1");
    catName.classList.add("favorite-cat-name");
    catName.textContent = name;
    catName.setAttribute("value", "liked");

    const removeFavorite = document.createElement("span");
    removeFavorite.classList.add(
      "material-symbols-outlined",
      "delete-favorite"
    );
    removeFavorite.textContent = "delete";

    // Dodaj sve elemente u parrent element
    parrentElement.append(likedCatImage, catName, removeFavorite);

    // Dodaj parrent element u likedCatsElement
    likedCatsElement.appendChild(parrentElement);
    console.log(parrentElement);
    // defaultPos();
    defaultElementPosition();
  });
}

function favoriteCat() {
  let click = true;
  // favorite cat link reference
  const favoriteCatLink = document.querySelector(".favorite");
  // arrow reference
  const expandFavorite = document.querySelector(".expand-favorite");
  // default rotation
  expandFavorite.style.transform = "rotate(180deg)";
  // arrow animation
  const rotateIn = [
    { transform: "rotate(180deg)" },
    { transform: "rotate(0deg)" },
  ];
  const rotateTime = {
    duration: 150,
    iteration: 1,
    fill: "forwards",
  };
  const rotateOut = [
    { transform: "rotate(0deg) " },
    { transform: "rotate(180deg) " },
  ];
  // ...........
  // EVENT LISTENER ->
  favoriteCatLink.addEventListener("click", function (e) {
    // console.log("expand favorite cats");
    // console.log(likedCatsArray);
    if (click === true) {
      // console.log("open favorite element");
      // slideIn();
      slideInAnimation();
      expandFavorite.animate(rotateIn, rotateTime);
      click = false;
    } else {
      // console.log("close liked cats");
      slideOutAnimation();
      expandFavorite.animate(rotateOut, rotateTime);
      click = true;
    }
  });
}
// function getLikedCats(){
//   return likedCatsArray;
// }
// function clearLikedCats(){
//   likedCatsArray = [];
// }
export { likeCat, favoriteCat };

import { slideInAnimation, slideOutAnimation } from "../animation/animation.js";

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

export { favoriteCat };

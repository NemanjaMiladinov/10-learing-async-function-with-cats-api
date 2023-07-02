function showHideCatsBreeds() {
  // console.log("show or hide cat breeds element / module showHideCatBreeds.js");
  // if this is true open element else close
  let click = true;
  // this is a link inside a nav
  const catsBreedsElement = document.querySelector(".cats-breeds");
  // thies are link elements
  const catsBreedLink = document.querySelector(".cat-breed");
  // this is icon
  const expand = document.querySelector(".expand");
  // animation
  const fadeIn = [{ opacity: 0 }, { opacity: 1 }];
  const rotateIn = [
    { transform: "rotate(180deg)" },
    { transform: "rotate(0deg)" },
  ];
  const rotateOut = [
    { transform: "rotate(0deg)" },
    { transform: "rotate(180deg)" },
  ];
  const fadeInTime = {
    duration: 150,
    iteration: 1,
    fill: "forwards",
  };
  const rotateTime = {
    duration: 150,
    iteration: 1,
    fill: "forwards",
  };
  // ...........
  // show or hide on moouse click
  catsBreedLink.addEventListener("click", function (e) {
    openCloseCatsBreeds();
  });
  // hide section when clicked on a link
  catsBreedsElement.addEventListener("click", function (e) {
    // console.log("close cat breeds element");
    openCloseCatsBreeds();
  });
  // Open or close
  function openCloseCatsBreeds() {
    if (click === true) {
      catsBreedsElement.classList.remove("hidden");
      catsBreedsElement.animate(fadeIn, fadeInTime);
      expand.animate(rotateIn, rotateTime);
      click = false;
    } else {
      catsBreedsElement.classList.add("hidden");
      expand.animate(rotateOut, rotateTime);
      click = true;
    }
  }
}

export { showHideCatsBreeds };

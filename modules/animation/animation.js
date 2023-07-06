// GLOBAL //

// - animation timing -
const slideTime = {
  duration: 250,
  iterations: 1,
  fill: "forwards",
};

// - html reference -
const favoriteCatElement = document.querySelector(".liked-cat-animation");

// get the height of navigation
const navigationHeight = document
  .querySelector(".nav")
  .getBoundingClientRect().height;
// console.log(navigationHeight);

const defaultElementPosition = () => {
  // set top default position -
  const defaultPosition = favoriteCatElement.offsetHeight + navigationHeight;
  favoriteCatElement.style.top = `-${defaultPosition}px`;
  console.log(favoriteCatElement.offsetHeight);
};

const slideInAnimation = () => {
  // set top default position -
  const defaultPosition = favoriteCatElement.offsetHeight + navigationHeight;
  const slideInAnimation = [
    { transform: `translateY(-${defaultPosition}px)` },
    { transform: `translateY(${defaultPosition}px)` },
  ];
  favoriteCatElement.animate(slideInAnimation, slideTime);
};

const slideOutAnimation = () => {
  // set top default position -
  const defaultPosition = favoriteCatElement.offsetHeight + navigationHeight;
  const slideOutAnimation = [
    { transform: `translateY(${defaultPosition}px)` },
    { transform: `translateY(-${defaultPosition}px)` },
  ];
  favoriteCatElement.animate(slideOutAnimation, slideTime);
};

export { defaultElementPosition, slideInAnimation, slideOutAnimation };

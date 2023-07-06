/*
  Add animation when clicked on button show details .
  I am going to try to set sequential animation ,
  I hope its going to look good ... 

*/

// animation keyframes
const animationKeyframes = [{ opacity: 0 }, { opacity: 1 }];
// keyframes options
const keyframesOpt = {
  duration: 1000,
  iterations: 1,
  fill: "forwards",
};

const showDetailsAnimationIn = () => {
  const elements = document.querySelectorAll(".cat-details__info");

  elements.forEach((el, index) => {
    el.style.display = "none";
    el.animate(animationKeyframes, keyframesOpt);

    setTimeout(() => {
      el.style.display = "block";
    }, index * 200);
  });
};

export { showDetailsAnimationIn };

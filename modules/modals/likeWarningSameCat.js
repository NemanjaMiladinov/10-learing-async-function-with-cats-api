const likeWarningSameCat = () => {
  // console.log("you already liked that cat");
  /*
  Show warning for users that they alreadu
  liked the same cat ...
  */
  const likeWarningModal = document.querySelector(".like-warning");
  likeWarningModal.style.display = "block";

  const heightAnimationIn = [{ opacity: 0 }, { opacity: 1 }];
  const timing = {
    iterations: 1,
    duration: 500,
    fil: "forwards",
    easing: "ease-in-out",
  };

  likeWarningModal.animate(heightAnimationIn, timing);

  setTimeout(() => {
    likeWarningModal.style.display = "none";
  }, 2000);
};

export { likeWarningSameCat };

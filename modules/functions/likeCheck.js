import { likeWarningSameCat } from "../modals/likeWarningSameCat.js";
import { clearLikes, getLikedNames } from "./likeFunctionality.js";

const likeCheck = () => {
  console.log("checking is user like same cat 2 times...");
  /*
    Using index [i] variable in indexOf as a starting
    point from where elements inside index will
    start "counting".

    Because I am checking for duplicates , it need to start
    counting from [i + 1] ... If I need it to check only if
    element exist , it would start from 0 ...
  */

  for (let i = 0; i < getLikedNames().length; i++) {
    const likes = getLikedNames()[i];

    if (getLikedNames().indexOf(likes, [i + 1]) !== -1) {
      console.log("you already liked that cat");
      likeWarningSameCat();
      return;
    }

    // console.log(likes);
  }
};

export { likeCheck };

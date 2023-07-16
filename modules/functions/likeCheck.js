import { likeWarningSameCat } from "../modals/likeWarningSameCat.js";
import { clearLikes, getLikedNames, likeInfo } from "./likeFunctionality.js";
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

  for (let i = 0; i < likeInfo.likedCatsNames.length; i++) {
    if (
      likeInfo.likedCatsNames.indexOf(likeInfo.likedCatsNames[i], [i + 1]) >= 0
    ) {
      console.log("you have duplicates");
      // ako imam duplikat obrisi taj element
      // loop curretn state and delete element at right index
      likeInfo.state[i].remove();

      console.log(likeInfo.likedCatsNames[i]);
    }
  }

  // for (let i = 0; i < getLikedNames().length; i++) {
  //   const likes = getLikedNames()[i];

  //   if (getLikedNames().indexOf(likes, [i + 1]) !== -1) {
  //     console.log("you already liked that cat");
  //     // favoriteCats[i].remove();

  //     console.log(getLikedNames());
  //     likeWarningSameCat();

  //     return;
  //   }
  // }
};
// const likeCheck = () => {
//   const favoriteCats = document.querySelectorAll(".liked-cat__parrent");
//   console.log("checking is user like same cat 2 times...");
//   /*
//     Using index [i] variable in indexOf as a starting
//     point from where elements inside index will
//     start "counting".

//     Because I am checking for duplicates , it need to start
//     counting from [i + 1] ... If I need it to check only if
//     element exist , it would start from 0 ...
//   */

//   for (let i = 0; i < getLikedNames().length; i++) {
//     const likes = getLikedNames()[i];

//     if (getLikedNames().indexOf(likes, [i + 1]) !== -1) {
//       console.log("you already liked that cat");
//       // favoriteCats[i].remove();

//       console.log(getLikedNames());
//       likeWarningSameCat();

//       return;
//     }

//     // console.log(likes);
//   }
// };

export { likeCheck };

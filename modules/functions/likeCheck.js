import { likeWarningSameCat } from "../modals/likeWarningSameCat.js";

// import { likeInfo } from "./likeFunctionality.js";
const likeCheck = (catName) => {
  console.log("checking is user like same cat 2 times...");
  const favoritesCatsNames = document.querySelectorAll(".favorite-cat-name");

  // Da li postoje duplikati ?
  for (let i = 0; i < favoritesCatsNames.length; i++) {
    /*
      uporedi da li element vec sadrzi string
      sa imenom koji je kreiran ...

      Sa obzirom da pre apendovanja elemenata prvo ide provera,
      u prvoj proveri nece postojati string sa isitm imenom,
      ali ako durgi put dodamo isto ime ovaj if ce biti true ...
    */

    if (favoritesCatsNames[i].textContent.includes(catName.textContent)) {
      console.log("Postoji duplikat u imenima mačaka.");
      likeWarningSameCat();
      return true;
    }
  }

  // for (let i = 0; i < favoriteCatName.length; i++) {
  //   console.log(favoriteCatName);
  //   if (favoriteCatName[i].textContent.includes(getLikedNames()[i])) {
  //     console.log("found duplicate return");

  //     return true;
  //   }
  //   return false;
  // }

  /*
    Using index [i] variable in indexOf as a starting
    point from where elements inside index will
    start "counting".

    Because I am checking for duplicates , it need to start
    counting from [i + 1] ... If I need it to check only if
    element exist , it would start from 0 ...
  */

  // for (let i = 0; i < likeInfo.likedCatsNames.length; i++) {
  //   if (
  //     likeInfo.likedCatsNames.indexOf(likeInfo.likedCatsNames[i], [i + 1]) >= 0
  //   ) {
  //     console.log("you have duplicates");
  //     // ako imam duplikat obrisi taj element
  //     // loop curretn state and delete element at right index
  //     likeInfo.state[i].remove();

  //     console.log(likeInfo.likedCatsNames[i]);
  //   }
  // }

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

// # IMPORTS

import {
  clearCreatedElements,
  createDetailsElements,
} from "../functions/createDetailsElements.js";
import { catsOptionEvent, showDetails } from "../functions/eventListeners.js";
import {
  setCatName,
  setCatOrigin,
  setCatImage,
} from "../functions/functions.js";

// ** LIKE EVENT ** //
// import { clearLikes, likeEvent } from "../functions/likeFunctionality.js";
// import { likeCat } from "../functions/likeCat.js";
import { removePointer } from "../functions/openModal.js";

let recivedDataInfo = [];

// # REQUEST API CALL
const request = async function (catName) {
  const url = `https://api.api-ninjas.com/v1/cats?name=${catName}`;
  const key = "C1P1duCICqwq3Yqni7169CmgoR0wdfHq6RRRGjYO";

  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        "X-API-KEY": key,
      },
    })
      .then((response) => {
        // console.log(response);
        if (!response.ok) {
          reject("Bad Request");
        } else {
          resolve(response.json());
        }
        return response;
      })
      .catch((error) => {
        throw new Error(error, "Something went wrong, catch error");
      });
  });
};

// this function is fired when is clicked on link cats breeds

const fullfilledRequest = async function (catName) {
  console.log("cat breeds clicked");
  // ocistiti niz pre dodavanja novih elemenata
  // okida se klikom na link
  clearCreatedElements();

  // dobijeni podaci iz api poziva
  const [recivedData] = await request(catName);

  recivedDataInfo.push(recivedData);
  // neki error
  if (!catName) {
    return;
  }

  // remove pointer se okida u main.js
  removePointer(recivedData.image_link);

  await Promise.all([
    setCatName(recivedData.name),
    setCatOrigin(recivedData.origin),
    setCatImage(recivedData.image_link),
    createDetailsElements(recivedData),
  ]);
};

const reciedDataState = () => {
  return [...recivedDataInfo];
};

export { request, fullfilledRequest, reciedDataState };

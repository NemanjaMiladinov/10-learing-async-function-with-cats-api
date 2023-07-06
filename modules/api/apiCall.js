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
import { likeCat } from "../functions/likeCat.js";
import { removePointer } from "../functions/openModal.js";
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
      })
      .catch((error) => {
        throw new Error(error, "Something went wrong, catch error");
      });
  });
};

// # API CALL RECIVED
const fullfilledRequest = async function (catName) {
  // ocistiti niz pre dodavanja novih elemenata
  clearCreatedElements();

  // dobijeni podaci iz api poziva
  const [recivedData] = await request(catName);

  // neki error
  if (!catName) {
    return;
  }

  // obrisi pointer kursos stil
  removePointer(recivedData.image_link);

  await Promise.all([
    setCatName(recivedData.name),
    setCatOrigin(recivedData.origin),
    setCatImage(recivedData.image_link),
    createDetailsElements(recivedData),
  ]);

  likeCat(recivedData.name, recivedData.image_link);
};

export { request, fullfilledRequest };

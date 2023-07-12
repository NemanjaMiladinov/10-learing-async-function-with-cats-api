import { showDetailsAnimationIn } from "../animation/showDetailsAnimation.js";

import { fullfilledRequest } from "../api/apiCall.js";

import {
  createdElements,
  getCreatedElements,
} from "./createDetailsElements.js";

let click = true;

function catsOptionEvent() {
  const catsBreedsLinks = document.querySelector(".cats-breeds");
  const parrentElement = document.querySelector(".cat-details");

  // #This event is responsible for api call
  catsBreedsLinks.addEventListener("click", async function (e) {
    // set target to be link text
    const selectVal = e.target.textContent;

    //select value is catName from apiCall.js module
    fullfilledRequest(selectVal);

    if (!click) {
      // clear the previus elements
      parrentElement.innerHTML = "";
      // get reference for the current data from api
      const createdElements = getCreatedElements();
      // loop over elements and append them
      for (let i = 0; i < createdElements.length; i++) {
        parrentElement.append(createdElements[i]);
      }
      //remove some elements that we dont need
      const elements = document.querySelectorAll(".cat-details__info");
      elements[0].remove();
      elements[1].remove();
      elements[2].remove();
      elements[elements.length - 1].remove();
    }
  });
}
// when is clicked on show details
const showDetails = () => {
  const showDetailsButton = document.querySelector(".btn-details");
  const parrentElement = document.querySelector(".cat-details");

  showDetailsButton.addEventListener("click", function (e) {
    // if created elements dont exist , exit ...
    if (getCreatedElements().length === 0) {
      return;
    }

    if (click === true) {
      parrentElement.style.display = "block";

      showDetailsButton.textContent = "CLOSE DETAILS";

      click = false;

      // clear any previus elements inside html section
      parrentElement.innerHTML = "";

      for (let i = 0; i < createdElements.length; i++) {
        // console.log(createdElements[i]);
        parrentElement.append(createdElements[i]);
      }
      // ...

      //remove some elements that are already shown(name,origin,length)
      const elements = document.querySelectorAll(".cat-details__info");

      elements[0].remove();
      elements[1].remove();
      elements[2].remove();
      elements[elements.length - 1].remove();

      // start details sequential animation
      showDetailsAnimationIn();
    } else {
      // close details element
      parrentElement.style.display = "none";
      showDetailsButton.textContent = "SHOW DETAILS";
      console.log("close details");

      click = true;
    }
  });
};

export { catsOptionEvent, showDetails };

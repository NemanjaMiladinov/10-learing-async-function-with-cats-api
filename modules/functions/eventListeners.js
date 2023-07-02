import { fullfilledRequest } from "../api/apiCall.js";
import {
  createdElements,
  getCreatedElements,
} from "./createDetailsElements.js";
let click = true;
function catsOptionEvent() {
  // this query reference was used in previus version , now its not used anymore
  // const catsOptionElement = document.querySelector("#cats-select");
  const catsBreedsLinks = document.querySelector(".cats-breeds");
  const parrentElement = document.querySelector(".cat-details");
  // #This event is responsible for api call
  catsBreedsLinks.addEventListener("click", async function (e) {
    // console.log("select options event");
    // set target to be link text
    const selectVal = e.target.textContent;
    // console.log(e.target);

    /* 
    await for this to be finished ,
    selectVal is a string for cat name
     */
    await fullfilledRequest(selectVal);
    /*
      ok, so I need to use await so the next
      line of code can wait for the promise
      to be fullfilled ...
    */
    /*
      So when I click to change the cat name
      click variable will become false
      and this if block its going to be executed ...
    */
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

const showDetails = () => {
  // let click = true;
  const showDetailsButton = document.querySelector(".btn-details");
  const parrentElement = document.querySelector(".cat-details");
  const catSelect = document.querySelector("#cats-select");

  showDetailsButton.addEventListener("click", function (e) {
    // console.log("event listener module/show details event");
    if (getCreatedElements().length === 0) {
      return;
    }
    if (click === true) {
      // console.log("show details");
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
      console.log(createdElements);
      console.log(catSelect);
      //remove some elements that are already shown(name,origin,length)
      const elements = document.querySelectorAll(".cat-details__info");
      elements[0].remove();
      elements[1].remove();
      elements[2].remove();
      elements[elements.length - 1].remove();
    } else {
      // createdElements = [];
      parrentElement.style.display = "none";
      showDetailsButton.textContent = "SHOW DETAILS";
      console.log("close details");
      click = true;
    }
  });
};

export { catsOptionEvent, showDetails };

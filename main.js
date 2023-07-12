"use strcit";
// import { favoriteCat, likeCat } from "./modules/functions/likeCat.js";
import { favoriteCat } from "./modules/functions/likeCat.js";

import {
  catsOptionEvent,
  showDetails,
} from "./modules/functions/eventListeners.js";

import { openModal, removePointer } from "./modules/functions/openModal.js";

import { createCatLinks } from "./modules/functions/createLinks.js";

import { showHideCatsBreeds } from "./modules/functions/showHideCatBreeds.js";
import { likeEvent } from "./modules/functions/likeFunctionality.js";

catsOptionEvent();
showDetails();

openModal();
removePointer();
createCatLinks();
showHideCatsBreeds();
favoriteCat();
// likeEvent();

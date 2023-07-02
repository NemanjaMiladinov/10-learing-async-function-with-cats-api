"use strcit";
import { favoriteCat } from "./modules/functions/likeCat.js";

import {
  catsOptionEvent,
  showDetails,
} from "./modules/functions/eventListeners.js";

import {
  mouseEvent,
  openModal,
  removePointer,
} from "./modules/functions/openModal.js";

import { createCatLinks } from "./modules/functions/createLinks.js";

import { showHideCatsBreeds } from "./modules/functions/showHideCatBreeds.js";

catsOptionEvent();
showDetails();
mouseEvent();
openModal();
removePointer();
createCatLinks();
showHideCatsBreeds();
favoriteCat();

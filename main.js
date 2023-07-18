"use strcit";
// import for opening favorite cat element
import { favoriteCat } from "./modules/functions/openFavoriteMenu.js";

import {
  catsOptionEvent,
  showDetails,
} from "./modules/functions/eventListeners.js";

import { openModal, removePointer } from "./modules/functions/openModal.js";

import { createCatLinks } from "./modules/functions/createLinks.js";

import { showHideCatsBreeds } from "./modules/functions/showHideCatBreeds.js";
import { fireLikeEvent } from "./modules/functions/likeFunctionality.js";
import { deleteItems } from "./modules/functions/deleteFavoriteCat.js";
fireLikeEvent();
catsOptionEvent();
showDetails();
openModal();
removePointer();
createCatLinks();
showHideCatsBreeds();
favoriteCat();
deleteItems();

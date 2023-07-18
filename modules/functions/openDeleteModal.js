import { defaultElementPosition } from "../animation/animation.js";

// removeFavoriteHandler(btnConfirm);
const openDeleteModal = (element) => {
  // element is removeFavorite icon element from like functionality module ...

  // modal element
  const confirmDeleteModal = document.querySelector(".confirm-delete-modal");

  // removeFavorite icon event to open modal for deliting

  element.addEventListener("click", async function (e) {
    console.log("open delete favorite cat modal");
    // console.log(e.target.parentElement);
    // console.log(btnConfirm);
    // show modal
    confirmDeleteModal.style.display = "block";
    // SA JEDNIM R SE PISE PARENT !!!!!
    e.target.parentElement.classList.add("remove");
    console.log(e.target.parentElement);
    defaultElementPosition();
  });
};

export { openDeleteModal };

/*
const confirmDelete = async (delElement, modal) => {
  const btnConfirm = document.querySelector(".button-wrapper");
  console.log("is this fired ?");
  btnConfirm.addEventListener("click", (e) => {
    console.log(e.target.textContent);

    if (e.target.classList.contains("yes")) {
      console.log("remove favorite cat");
    } else {
      console.log("dont remove favorite cat");
    }
  });

  
  return new Promise((resolve, reject) => {
    function clickHandler(event) {
      if (event.target.textContent === "yes") {
        console.log("remove item");
        console.log(delElement);
        // delElement.remove();
        modal.style.display = "none";
        defaultElementPosition();
        // console.log(getLikedNames());
        // for (let i = 0; i < getLikedNames().length; i++) {
        //   getLikedNames().splice(getLikedNames()[i], 1);
        //   console.log(getLikedNames());
        // }
        return;
      }
      // if (event.target.textContent === "no") {
      //   console.log("dont remove item");
      //   modal.style.display = "none";
      //   // defaultElementPosition();
      //   return;
      // }
    }

    btnConfirm.addEventListener("click", clickHandler);
  });
  
};
*/

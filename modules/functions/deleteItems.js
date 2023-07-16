import { defaultElementPosition } from "../animation/animation.js";

const confirmDelete = async (element, modal) => {
  const btnConfirm = document.querySelector(".button-wrapper");

  return new Promise(() => {
    function clickHandler(event) {
      if (event.target.textContent === "yes") {
        console.log("remove item");
        element.remove();
        modal.style.display = "none";
        defaultElementPosition();
        // console.log(getLikedNames());
        // for (let i = 0; i < getLikedNames().length; i++) {
        //   getLikedNames().splice(getLikedNames()[i], 1);
        //   console.log(getLikedNames());
        // }
        return;
      }
      if (event.target.textContent === "no") {
        console.log("dont remove item");
        modal.style.display = "none";
        defaultElementPosition();
      }
    }
    btnConfirm.addEventListener("click", clickHandler);
  });
};

const deleteItems = async (element) => {
  const confirmDeleteModal = document.querySelector(".confirm-delete-modal");

  // element is removeFavorite icon created in likeFuntionality
  if (element) {
    element.addEventListener("click", async function (e) {
      console.log("deleting items from favorite cats");
      console.log(e.target.parentElement);
      const deleteItem = element.parentElement;

      // show modal
      confirmDeleteModal.style.display = "block";
      // wait for delete confirm
      await confirmDelete(deleteItem, confirmDeleteModal);

      defaultElementPosition();
    });
  } else {
    return;
  }
};

export { deleteItems };

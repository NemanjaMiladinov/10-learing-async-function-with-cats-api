import { clearLikes } from "./likeFunctionality.js";

const confirmDelete = async (element, modal) => {
  const btnConfirm = document.querySelector(".button-wrapper");

  function clickHandler(event) {
    if (event.target.textContent !== "no") {
      console.log("remove item");
      element.remove();
      modal.style.display = "none";
    } else {
      console.log("dont remove item");
      modal.style.display = "none";
      return;
    }
  }

  return new Promise(() => {
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
      const deleteItem = e.target.parentElement;

      // show modal
      confirmDeleteModal.style.display = "block";
      // wait for delete confirm
      await confirmDelete(deleteItem, confirmDeleteModal);

      // deleteItem.remove();

      // clear like state
      clearLikes();
    });
  } else {
    return;
  }
};

export { deleteItems };

import { defaultElementPosition } from "../animation/animation.js";

const deleteItems = (element) => {
  const btnsConfirm = document.querySelectorAll(".btn-confirm");
  const deleteModal = document.querySelector(".confirm-delete-modal");

  console.log("delete favorite cat");
  if (!element) {
    return;
  }

  btnsConfirm.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (e.target.textContent === "yes") {
        console.log("remove favorite element");
        console.log(element.parentElement);
        if (element.parentElement.classList.contains("remove")) {
          console.log("remove element");
          element.parentElement.remove();
          deleteModal.style.display = "none";
          defaultElementPosition();
          return;
        }
      }
      if (e.target.textContent === "no") {
        console.log("dont remove favorite element");
        element.parentElement.classList.remove("remove");
        deleteModal.style.display = "none";
        defaultElementPosition();
        return;
      }
    });
  });
};

export { deleteItems };

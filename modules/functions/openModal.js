import { getCreatedElements } from "./createDetailsElements.js";

function openModal() {
  // console.log("open image modal");
  const openImageModal = document.querySelector(".open-image");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalPicture = document.querySelector(".modal-picture");
  const closeModal = document.querySelector(".close-modal");
  const catImage = document.querySelector(".cat-img");
  openImageModal.addEventListener("click", function (e) {
    // console.log(e.target);
    const click = e.target;
    if (!click.classList.contains("open-image")) {
      return;
    } else {
      // console.log("open modal");
      modalOverlay.style.display = "block";
      modalPicture.style.display = "block";
      // console.log(catImage.getAttribute("src"));
      const dataImage = catImage.getAttribute("src");
      console.log(dataImage);
      const modalImageSrc = modalPicture.childNodes[3];
      console.log(modalImageSrc);
      // change image sources
      modalImageSrc.setAttribute("src", dataImage);
      // console.log(modalPicture.childNodes[3]);
    }
  });
  modalOverlay.addEventListener("click", function (e) {
    // console.log(e);
    if (e.isTrusted) {
      modalOverlay.style.display = "none";
      modalPicture.style.display = "none";
    } else {
      return;
    }
  });
  closeModal.addEventListener("click", function () {
    modalOverlay.style.display = "none";
    modalPicture.style.display = "none";
  });
}

function mouseEvent(imageLink) {
  const imageContainer = document.querySelector(".cat-img-box");
  const viewImage = document.querySelector(".open-image");
  const like = document.querySelector(".like");
  // viewImage.style.display = "none";
  function mouseOver() {
    imageContainer.addEventListener("mouseover", function (e) {
      if (e.target.classList.contains("cat-img")) {
        // console.log("mouse over");
        if (imageLink) {
          viewImage.style.display = "block";
          like.style.display = "block";
          return;
        }
      }
    });
  }
  function mouseLeave() {
    imageContainer.addEventListener("mouseleave", function (e) {
      // console.log("mouse leave");
      if (!imageLink) {
        viewImage.style.display = "none";
        like.style.display = "none";
        return;
      }
    });
  }

  mouseOver();
  mouseLeave();
}
/* 
  if there is no image link from
  api call I want to remove pointer
  from image element ...
*/
function removePointer(imageLink) {
  const imageContainer = document.querySelector(".cat-img-box");
  // if image link exist on the page change pointer
  if (imageLink) {
    // console.log("cursor pointer on image");
    imageContainer.style.cursor = "pointer";
  } else {
    // console.log("default cursor on image");
    imageContainer.style.cursor = "default";
  }
}
export { openModal, mouseEvent, removePointer };

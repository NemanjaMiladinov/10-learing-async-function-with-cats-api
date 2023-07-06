function openModal() {
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
      modalOverlay.style.display = "block";
      modalPicture.style.display = "block";

      const dataImage = catImage.getAttribute("src");
      console.log(dataImage);
      const modalImageSrc = modalPicture.childNodes[3];
      console.log(modalImageSrc);

      // change image sources
      modalImageSrc.setAttribute("src", dataImage);
    }
  });

  modalOverlay.addEventListener("click", function (e) {
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
/* 
  if there is no image link from
  api call I want to remove pointer
  from image element and when image
  is loaded add icon for viewing and liking image...
*/
function removePointer(imageLink) {
  const viewImage = document.querySelector(".open-image");
  const like = document.querySelector(".like");
  const imageContainer = document.querySelector(".cat-img-box");

  // if image link exist on the page change pointer
  if (imageLink) {
    imageContainer.style.cursor = "pointer";
    viewImage.style.display = "block";
    like.style.display = "block";
  } else {
    imageContainer.style.cursor = "default";
    viewImage.style.display = "none";
    like.style.display = "none";
  }
}
export { openModal, removePointer };

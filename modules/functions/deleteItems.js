import { clearLikes } from "./likeFunctionality.js";

const deleteItems = (element) => {
  // element is removeFavorite icon created in likeFuntionality
  if (element) {
    element.addEventListener("click", function (e) {
      console.log("deleting items from favorite cats");
      console.log(e.target.parentElement);
      const deleteItem = e.target.parentElement;
      deleteItem.remove();
      // clear like state
      clearLikes();
    });
  } else {
    return;
  }
};

export { deleteItems };

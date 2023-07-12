// this module is not used ... I let this here maybe will be usefull later ...

function catLinkValue(targetLink) {
  console.log("add value to cats links");
  const catLinks = document.querySelectorAll(".cat-link");
  console.log(targetLink);
  for (let i = 0; i < catLinks.length; i++) {
    /*
      targetLink is a string
      coming from api call (recivedData.name).
      Check if any of link elements
      includes the same string (same cat name) .
      If there is a name of the cat
      with targetLink string name,
      set attribute value to "liked" ...
    */
    if (catLinks[i].textContent === targetLink) {
      catLinks[i].setAttribute("value", "liked");
      console.log(catLinks[i]);
      break;
    }
    // if (catLinks[i].textContent.includes(targetLink)) {
    //   console.log(catLinks[i]);
    //   catLinks[i].setAttribute("value", "liked");
    //   break;
    // }
  }
}
function likeAgain() {
  console.log("add value to cats links");
  const catLinks = document.querySelectorAll(".cat-link");
  // console.log(targetLink);
  for (let i = 0; i < catLinks.length; i++) {
    const linkValues = catLinks[i].getAttribute("value");
    if (linkValues === "liked") {
      catLinks[i].setAttribute("data-content", "already-liked");
    }
  }
}
export { catLinkValue, likeAgain };

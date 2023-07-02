function catLinkValue(targetLink) {
  console.log("add value to cats links");
  const catLinks = document.querySelectorAll(".cat-link");
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
    if (catLinks[i].textContent.includes(targetLink)) {
      console.log(catLinks[i]);
      catLinks[i].setAttribute("value", "liked");
      break;
    }
  }
}

export { catLinkValue };

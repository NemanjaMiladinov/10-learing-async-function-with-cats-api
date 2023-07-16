// set cat name inside html element
const setCatName = (name) => {
  console.log("api recived / set cat name");
  const nameElement = document.querySelector(".cat-name");
  nameElement.textContent = `"${name}"`;
};
// set cat origin inside html element
const setCatOrigin = (origin) => {
  console.log("api recived / set cat origin");
  const originElement = document.querySelector(".origin");
  originElement.textContent = `"${origin}"`;
};
// set cat image inside html image element (src)
const setCatImage = (imageSource) => {
  console.log("api recived / set cat image");
  const catImageElement = document.querySelector(".cat-img");
  catImageElement.setAttribute("src", imageSource);
};

export { setCatName, setCatOrigin, setCatImage };

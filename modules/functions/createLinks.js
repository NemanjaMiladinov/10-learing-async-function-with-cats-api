function createCatLinks() {
  /*
    this F is for creating links elements
    and they are opened by clicking on cats breeds link ... 

  */
  // console.log("create cat link / module createCatLinks.js");
  // create elements based on this array
  const breeds = [
    "Abyssinian",
    "Persian",
    "Siamese",
    "Maine Coon",
    "British Shorthair",
    "Siberian",
    "Ragdoll",
    "Egyptian Mau",
    "Bengal",
    "Scottish Fold",
    "Burmese",
    "Russian Blue",
    "Norwegian Forest",
    "Balinese",
    "Sphynx",
    "Tonkinese",
    "Somali",
    "Oriental",
    "Birman",
    "Turkish Angora",
    "Devon Rex",
    "American Shorthair",
    "Exotic Shorthair",
    "Chartreux",
    "Cornish Rex",
    "Siamese Balinese",
    "Havana Brown",
    "Turkish Van",
    "Singapura",
    "Selkirk Rex",
    "LaPerm",
    "Ocicat",
    "Nebelung",
    "Burmilla",
    "Peterbald",
    "Japanese Bobtail",
    "American Curl",
    "Somali",
    "Scottish Fold",
    "Manx",
    "Bombay",
    "Cymric",
    "Pixie-Bob",
    "Oriental Longhair",
    "Ragamuffin",
    "Australian Mist",
    "Sokoke",
    "Serengeti",
  ];
  // 48 breeds
  // console.log(breeds.length);
  // append to this elements
  const selectHtmlEl = document.querySelector(".cats-breeds");
  // this element for first 24 results
  const first20 = document.createElement("div");
  first20.classList.add("first-20-breeds");
  // second 24 results
  const second20 = document.createElement("div");
  second20.classList.add("second-20-breeds");
  // loop over half elements in array
  for (let i = 0; i < breeds.length - 24; i++) {
    // create 24 link element
    const links = document.createElement("a");
    // add class to get reference to elements
    links.classList.add("cat-link");
    // set href
    links.setAttribute("href", "#");
    // add string name of cats to link
    links.appendChild(document.createTextNode(breeds[i]));
    // append
    first20.append(links);
    // link
    // console.log(links.length);
  }
  for (let i = 24; i < breeds.length; i++) {
    // create elements for second 24 results
    const links1 = document.createElement("a");
    // add class
    links1.classList.add("cat-link");
    // set att
    links1.setAttribute("href", "#");
    // add string name
    links1.appendChild(document.createTextNode(breeds[i]));
    // append
    second20.append(links1);
    // console.log(links1.length);
  }
  selectHtmlEl.append(first20, second20);
}

export { createCatLinks };

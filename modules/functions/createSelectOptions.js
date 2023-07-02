/*
  this is previus version where I used
  select html tag to create options elements
  and based on what option is clicked
  certain cat is displayed ... this function
  is for creating options tags ...

const createOptionElements = () => {
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
  const selectHtmlEl = document.querySelector("#cats-select");
  for (const cats of breeds) {
    // console.log(cats);
    // create option element
    const options = document.createElement("option");
    // add class to get reference to elements
    options.classList.add("cat-option");
    // set att value to have reference to different breeds
    options.setAttribute("value", cats);
    // add string name of the cats to elements
    options.appendChild(document.createTextNode(cats));
    // append all elements in to select html element
    selectHtmlEl.appendChild(options);
  }
  // console.log(selectHtmlEl);
};

export { createOptionElements };
*/

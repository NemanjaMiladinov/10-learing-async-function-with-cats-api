// global export for show details button
let createdElements = [];
function createDetailsElements(recivedData) {
  clearCreatedElements();
  console.log("create details elements");

  // napraviti elementi koji su mi potrebni iz recived data
  for (const [key, val] of Object.entries(recivedData)) {
    console.log("data recived for creating elements");
    // kreirati cat-details__info element da bude roditelj(cat-details__info)
    const catDetailsInfo = document.createElement("div");
    catDetailsInfo.classList.add("cat-details__info");
    // kreirati ime informacije koju zelim da prikazem(cat-details__name) h3
    const catDetailsName = document.createElement("h3");
    catDetailsName.classList.add("cat-details__name");
    const detailsNameStr = key.toLocaleLowerCase().replace("_", " ");
    const fixAnotation =
      detailsNameStr[0].toUpperCase() + detailsNameStr.slice(1);
    catDetailsName.appendChild(document.createTextNode(fixAnotation));
    // kreirati broj koji predstavlja vrednost informacije(cat-details__number) span
    const catDetailsNumber = document.createElement("span");
    catDetailsNumber.classList.add("cat-details__number");
    catDetailsNumber.appendChild(document.createTextNode(val));
    // append everything to parrent element
    catDetailsInfo.append(catDetailsName, catDetailsNumber);
    createdElements.push(catDetailsInfo);
    // createdElements = [];
  }
}
/*
 ovo funckija mi je potrebna kako bi drugi moduli
 dobili uvid u trenutno stanje u nizu
*/
function getCreatedElements() {
  return createdElements;
}
/*
  ova funkcija mi je potrebna da bi u drugim
  modulima mogao da ocistim niz ,
  kako ne bi dolazilo do dupliranja elementa ...
*/
function clearCreatedElements() {
  createdElements = [];
}
export {
  createDetailsElements,
  getCreatedElements,
  clearCreatedElements,
  createdElements,
};

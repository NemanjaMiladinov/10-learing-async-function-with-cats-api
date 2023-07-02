function noLikeMessage() {
  console.log("create no like message");
  let catsMessage = document.querySelector(".cat-talking-no-like");
  const body = document.querySelector(".bodyEl");

  if (!catsMessage) {
    const div = document.createElement("div");
    div.classList.add("cat-talking-no-like");
    const errorTitle = document.createElement("h3");
    errorTitle.textContent = "You didnt like any of my friends... Myauuuu";
    div.appendChild(errorTitle);
    body.appendChild(div);
    catsMessage = div;
    setTimeout(() => {
      catsMessage.remove();
    }, 2000);
  }
}

export { noLikeMessage };

import { captions } from "./caption.js";

const main = document.querySelector("main");
const hamburgerBtn = document.querySelector("#menu__hamburger-button");
const closeBtn = document.querySelector("#menu__off-screen__close-button");
const nav = document.querySelector("header nav");
const modalScreen = document.querySelector("#modal-screen");
const modalContent = document.querySelector("#modal-screen div");
const menuLinks = document.querySelector("#menu__off-screen__links");

window.addEventListener("load", () => {
  captions.forEach((caption, i) => {
    const figure = document.createElement("figure");
    figure.innerHTML = `<img src="img/${
      i + 1
    }.jpg" loading="lazy" /><figcaption>${caption}</figcaption>`;
    figure.addEventListener("click", () => {
      modalContent.innerHTML = `<img src="img/${
        i + 1
      }.jpg" style='width:60%;' />`;

      modalScreen.style.visibility = "visible";
    });
    main.appendChild(figure);
  });
});

hamburgerBtn.addEventListener("click", () => {
  nav.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
});

modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});

modalScreen.addEventListener("click", () => {
  modalScreen.style.visibility = "hidden";
});

menuLinks.addEventListener("click", (e) => {
  const clickedItem = e.target.closest(".menu__off-screen__links__link-item");

  menuLinks
    .querySelectorAll("li")
    .forEach((li) =>
      li.classList.remove("menu__off-screen__links__link-item--active")
    );

  clickedItem.classList.add("menu__off-screen__links__link-item--active");
});

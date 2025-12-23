import { captions } from "./caption.js";

const main = document.querySelector("main");
const menuBtn = document.querySelector("#menu__hamburger-button");
const closeBtn = document.querySelector("#menu__off-screen__close-button");
const nav = document.querySelector("header nav");
const modalScreen = document.querySelector("#modal-screen");
const modalContent = document.querySelector("#modal-screen div");

window.addEventListener("load", () => {
  captions.forEach((caption, i) => {
    const figure = document.createElement("figure");
    figure.innerHTML = `<img src="img/${
      i + 1
    }.jpg" loading="lazy" /><figcaption>${caption}</figcaption>`;
    figure.addEventListener("click", (e) => {
      modalContent.innerHTML = `<img src="img/${
        i + 1
      }.jpg" style='width:60%;' />`;

      modalScreen.style.visibility = "visible";
    });
    main.appendChild(figure);
  });
});

menuBtn.addEventListener("click", () => {
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

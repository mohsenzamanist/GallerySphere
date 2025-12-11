import { captions } from "./caption.js";

const main = document.querySelector("main");
const menuBtn = document.querySelector("#menu__hamburger-button");
const closeBtn = document.querySelector("#menu__off-screen__close-button");
const nav = document.querySelector("header nav");

window.addEventListener("load", () => {
  captions.forEach((caption, i) => {
    const figure = document.createElement("figure");
    figure.innerHTML = `<img src="img/${
      i + 1
    }.jpg" loading="lazy" /><figcaption>${caption}</figcaption>`;
    main.appendChild(figure);
  });
});

menuBtn.addEventListener("click", () => {
  nav.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
});

"use strict";

const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

document.addEventListener("mousemove", (e) => {
  tag.innerHTML = `${e.clientX} : ${e.clientY}`;
});

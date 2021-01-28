"use strict";

const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  tag.innerHTML = `${x} : ${y}`;
});

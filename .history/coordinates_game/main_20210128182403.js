"use strict";

const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  tag.innerHTML = `${x} : ${y}`;

  vertical.style.transform = `translateX(${x}px)`;
  horizontal.style.transform = `translateY(${y}px)`;

  target.style.transform = `translate(${x}px,${y}px)`;`
  target.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
});

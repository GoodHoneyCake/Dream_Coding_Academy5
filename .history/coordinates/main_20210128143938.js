"use strict";

const p = document.querySelector("p");

window.addEventListener("mousemove", onMove);

function onMove(e) {
  p.innerText = ` Client X/Y: ${e.clientX}, ${e.clientY}`;
}

p.style.top = window.screen / 2;

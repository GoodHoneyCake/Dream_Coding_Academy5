"use strict";

const p = document.querySelector("p");

window.addEventListener("pointermove", onMove);

function onMove(e) {
  p.innerText = ` Client X/Y: ${e.clientX}, ${e.clientY}`;
}

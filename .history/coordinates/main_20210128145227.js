"use strict";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const p = document.querySelector("p");

window.addEventListener("mousemove", onMove);

function onMove(e) {
  p.innerText = ` Client X/Y: ${e.clientX}, ${e.clientY}`;
}

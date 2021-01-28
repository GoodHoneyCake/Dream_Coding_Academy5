"use strict";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const p = document.querySelector("p");

document.addEventListener("mousemove", onMove);

function onMove(e) {
  p.innerText = ` Client X/Y: ${e.clientX}, ${e.clientY}`;
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
}


const p = document.querySelector("p");

window.addEventListener("mousemove", onMove);

function onMove(e) {
  p.innerText = ` Client X/Y: ${e.clientX}, ${e.clientY}`;
}

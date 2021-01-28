const p = document.querySelector("p");

window.addEventListener("mousemove", onMove);

function onMove() {
  p.innerText = `${window.outerWidth}:${document.documentElement.clientHeight}`;
}

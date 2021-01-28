const p = document.querySelector("p");

window.addEventListener("mousemove", onMove);

function onMove() {
  p.innerText = `${document.documentElement.clientWidth}:${document.documentElement.clientHeight}`;
}

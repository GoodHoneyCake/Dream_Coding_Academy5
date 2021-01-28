const p = document.querySelector("p");

document.addEventListener("mousemove", onMove);

function onMove() {
  p.innerText = `${document.documentElement.clientWidth}:${document.documentElement.clientHeight}`;
}

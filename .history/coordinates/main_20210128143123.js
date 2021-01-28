const p = document.querySelector("p");

window.addEventListener("mousemove", () => {});

function onMove() {
  p.innerText = `${document.documentElement.clientWidth}:${document.documentElement.clientHeight}`;
}

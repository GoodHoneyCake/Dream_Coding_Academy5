const p = document.querySelector("p");

window.addEventListener("mousemove", () => {
  p.innerHTML = `${document.documentElement.clientWidth}:${document.documentElement.clientHeight}`;
});

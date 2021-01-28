let p = document.querySelector("p");

window.addEventListener("mousemove", () => {
  p.innerText = `${document.documentElement.clientWidth}:${document.documentElement.clientHeight}`;
});

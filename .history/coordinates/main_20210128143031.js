const p = document.querySelector("p");

window.addEventListener("mousemove", (e) => {
  p.innerText = `${document.documentElement.clientWidth}:${document.documentElement.clientHeight}`;
});

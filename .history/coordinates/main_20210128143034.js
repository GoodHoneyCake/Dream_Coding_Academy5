const p = document.querySelector("p");

window.addEventListener("mousemove", (e) => {
  e.innerText = `${document.documentElement.clientWidth}:${document.documentElement.clientHeight}`;
});

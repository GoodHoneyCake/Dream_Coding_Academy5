const form = document.querySelector("form");
const list = document.querySelector(".list");

form.addEventListener("submit", (e) => {
  list.createElement("li");
  const data = list.createTextNode(e);
  list.appendChild(data);
  e.preventDefault();
});

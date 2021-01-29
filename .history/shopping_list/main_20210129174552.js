const form = document.querySelector("form");
const list = document.querySelector(".list");

form.addEventListener("submit", (e) => {
  form = "";
  e.preventDefault();
  document.createElement("li");
  const data = document.createTextNode(e);
  list.appendChild(data);
});

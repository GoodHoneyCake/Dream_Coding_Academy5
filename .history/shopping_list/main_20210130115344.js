"use strict";

const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__btn");

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아온다
  const text = input.value;
  if (text === "" || text.length == null) {
    input.focus();
    return;
  }
  // 2. 새로운 아이템을 만든다 (텍스트 + 삭제 버튼)
  const item = createItem(text);
  // 3. items 컨테이너안에 새로 만든 아이템을 추가한다
  items.appendChild(item);
  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: "center" });
  // 5. 인풋을 초기화 한다
  input.value = "";
  input.focus();
}

let id = 0; // UUID 같은 라이브러리를 쓰는게 좋지만 지금은 간단한 미니 프로젝트라서 이렇게 글로벌로 id를 숫자로 정의
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.innerHTML = `
  <div class="item" data-id=${id}>
    <span class="item__name">${text}</span>
    <button class="item__delete" data-id=${id}>
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
  <div class="item__divider"></div>
`;
  // const item = document.createElement("div");
  // item.setAttribute("class", "item");

  // const span = document.createElement("span");
  // span.setAttribute("class", "item__name");
  // span.innerText = text;

  // const deleteBtn = document.createElement("button");
  // deleteBtn.setAttribute("class", "item__delete");
  // deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  // deleteBtn.addEventListener("click", () => {
  //   items.removeChild(itemRow);
  // });

  // const itemDivider = document.createElement("div");
  // itemDivider.setAttribute("class", "item__divider");

  // item.appendChild(span);
  // item.appendChild(deleteBtn);

  // itemRow.appendChild(item);
  // itemRow.appendChild(itemDivider);
  id++;
  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    onAdd();
  } else {
    return;
  }
});

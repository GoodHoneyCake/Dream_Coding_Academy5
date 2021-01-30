"use strict";

const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();

function initGame() {
  // 벌레와 당근을 생성한뒤 필드에 추가해준다
  console.log(fieldRect);
  addItem("carrot", 5, "img/carrot.png");
  addItem("bug", 5, "img/bug.png");
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width;
  const y2 = fieldRect.height;
}
initGame();

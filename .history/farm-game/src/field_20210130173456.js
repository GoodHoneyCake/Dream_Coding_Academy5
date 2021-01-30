"use strict";

export default class Field {
  constructor(carroutCount, bugCount) {
    this.carroutCount = carroutCount;
    this.bugCount = bugCount;
    this.field = document.querySelector(".game__field");
    this.fieldRect = field.getBoundingClientRect();
    this.field.addEventListener("click", this.onClick);
  }
  init() {
    field.innerHTML = "";
    // 벌레와 당근을 생성한뒤 필드에 추가해준다
    addItem("carrot", CARROT_COUNT, "img/carrot.png");
    addItem("bug", BUG_COUNT, "img/bug.png");
  }
  onClick(e) {}
}

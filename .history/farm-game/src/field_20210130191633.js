"use strict";
import * as sound from "./sound.js";
const CARROT_SIZE = 80;

export default class Field {
  constructor(carroutCount, bugCount) {
    this.carroutCount = carroutCount;
    this.bugCount = bugCount;
    this.field = document.querySelector(".game__field");
    this.fieldRect = this.field.getBoundingClientRect();
    // this.onClick = this.onClick.bind(this);
    // this.field.addEventListener("click", (e)=>this.onClick(e));
    this.field.addEventListener("click", this.onClick);
  }
  init() {
    this.field.innerHTML = "";
    // 벌레와 당근을 생성한뒤 필드에 추가해준다
    this._addItem("carrot", this.carroutCount, "img/carrot.png");
    this._addItem("bug", this.bugCount, "img/bug.png");
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  _addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y2 = this.fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++) {
      const item = document.createElement("img");
      item.setAttribute("class", className);
      item.setAttribute("src", imgPath);
      item.style.position = "absolute";
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }
  // bind: = () => arrow func
  onClick = (e) => {
    const target = e.target;
    if (target.matches(".carrot")) {
      // 당근!!
      target.remove();
      sound.palyCarrot();
      this.onItemClick && this.onItemClick("crrot");
    } else if (target.matches(".bug")) {
      // 벌레!!
      sound.palyBug();
      this.onItemClick && this.onItemClick("bug");
    }
  };
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
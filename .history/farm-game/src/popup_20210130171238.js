"use strict";

class PopUp {
  constructor() {
    this.popUp = document.querySelector(".pop-up");
    this.popUpText = document.querySelector(".pop-up__message");
    this.popUpRefresh = document.querySelector(".pop-up__refresh");
    popUpRefresh.addEventListener("click", () => {
      this.onClick && this.onClick();
      hide();
    });
  }

  setClickListener(onClick) {
    this.onClick = onClick;
    this.popUp.classList.add("pop-up--hide");
  }
}

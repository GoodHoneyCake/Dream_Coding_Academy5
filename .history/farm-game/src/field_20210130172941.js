"use strict";

export default class Field {
  constructor() {
    this.field = document.querySelector(".game__field");
    this.fieldRect = field.getBoundingClientRect();
    this.field.addEventListener("click", onFieldClick);
  }

  onFieldClick(e) {
    if (started === false) {
      return;
    }
    const target = e.target;
    if (target.matches(".carrot")) {
      // 당근!!
      target.remove();
      score++;
      playSound(carrotSound);
      updateScoreBoard();
      if (score === CARROT_COUNT) {
        finishGame(true);
      }
    } else if (target.matches(".bug")) {
      // 벌레!!
      finishGame(false);
    }
  }
}

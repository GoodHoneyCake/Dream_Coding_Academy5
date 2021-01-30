"use strict";

export default class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.gameBtn = document.querySelector(".game__button");
    this.gameTimer = document.querySelector(".game__timer");
    this.gameScore = document.querySelector(".game__score");

    this.gameField = new Field(CARROT_COUNT, BUG_COUNT);
    gameField.setClickListener(onItemClick);

    this.started = false;
    this.score = 0;
    this.timer = undefined;
  }
}

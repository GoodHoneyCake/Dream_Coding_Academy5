"use strict";

export default class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    gameBtn = document.querySelector(".game__button");
    gameTimer = document.querySelector(".game__timer");
    gameScore = document.querySelector(".game__score");

    started = false;
    score = 0;
    timer = undefined;
  }
}

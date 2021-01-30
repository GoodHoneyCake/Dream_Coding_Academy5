import * as sound from "./sound.js";
import Field from "./field.js";

("use strict");

export default class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.gameBtn = document.querySelector(".game__button");
    this.gameTimer = document.querySelector(".game__timer");
    this.gameScore = document.querySelector(".game__score");
    this.gameBtn.addEventListener("click", () => {
      if (started) {
        this.stop();
      } else {
        this.start();
      }
    });

    this.gameField = new Field(carrotCount, bugCount);
    this.gameField.setClickListener(this.onItemClick);

    this.started = false;
    this.score = 0;
    this.timer = undefined;
  }

  start() {
    this.started = true;
    this.initGame();
    this.showStopBtn();
    this.showTimeAndScore();
    this.startGameTimer();
    sound.palyBg();
  }

  stop() {
    this.started = false;
    this.stopGameTimer();
    this.hideGameBtn();
    this.gameFinishBanner.showWithText("REPLAY? 🥕");
    sound.palyAlert();
    sound.stopBg();
  }

  finish(win) {
    this.started = false;
    this.hideGameBtn();
    if (win) {
      sound.palyWin();
    } else {
      sound.palyBg();
    }
    this.stopGameTimer();
    sound.stopBg();
    gameFinishBanner.showWithText(win ? "YOU WON 🥰" : "YOU LOST 🥲");
  }

  //bind arrow func
  onItemClick = (item) => {
    if (started === false) {
      return;
    }
    if (item === "carrot") {
      this.score++;
      this.updateScoreBoard();
      if (score === CARROT_COUNT) {
        this.finishGame(true);
      }
    } else if (item === "bug") {
      this.finishGame(false);
    }
  };
}

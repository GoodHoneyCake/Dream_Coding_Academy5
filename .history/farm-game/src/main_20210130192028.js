"use strict";
import PopUp from "./popup.js";
import Game from "./game.js";

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  startGame();
});

const game = new Game(GAME_DURATION_SEC, CARROT_COUNT, BUG_COUNT);
game.setGameStopListener((reason) => {
  console.log(reason);
  let message;
  switch (reson) {
    case "취소":
      message = "😡";
      break;
    case "승리":
      break;
    case "패배":
      break;
    default:
      throw new Error("not valid reason");
  }
});

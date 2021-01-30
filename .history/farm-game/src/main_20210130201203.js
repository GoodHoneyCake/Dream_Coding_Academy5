"use strict";
import PopUp from "./popup.js";
import Game from "./game.js";

const gameFinishBanner = new PopUp();

const game = new Game()
  .withGameDuration(5)
  .withCarrotCount(5)
  .withBugCount(5)
  .build();
game.setGameStopListener((reason) => {
  console.log(reason);
  let message;
  switch (reason) {
    case "취소":
      message = "😡";
      break;
    case "승리":
      message = "😎";
      break;
    case "패배":
      message = "🥺";
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});

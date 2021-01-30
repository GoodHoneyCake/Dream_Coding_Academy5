"use strict";
import { Reason, GameBuilder } from "./game.js";
import PopUp from "./popup.js";
import * as sound from "./sound.js";

const gameFinishBanner = new PopUp();

const game = new GameBuilder()
  .withGameDuration(5)
  .withCarrotCount(5)
  .withBugCount(5)
  .build();

game.setGameStopListener((reason) => {
  console.log(reason);
  let message;
  switch (reason) {
    case Reason.cancel:
      message = "😡";
      sound.palyAlert();
      break;
    case Reason.win:
      message = "😎";
      sound.palyWin();
      break;
    case Reason.lose:
      message = "🥺";
      sound.palyBug();
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});

const carrotSound = new Audio("./sound/carrot_pull.mp3");
const alertSound = new Audio("./sound/alert.wav");
const bgSound = new Audio("./sound/bg.mp3");
const bugSound = new Audio("./sound/bug_pull.mp3");
const winSound = new Audio("./sound/game_win.mp3");

export function palyCarrot() {
  playSound(carrotSound);
}
export function palyAlert() {
  playSound(alertSound);
}
export function palyBg() {
  playSound(bgSound);
}
export function stopBg() {
  playSound(bgSound);
}
export function palyBug() {
  playSound(bugSound);
}
export function palyWin() {
  playSound(winSound);
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}

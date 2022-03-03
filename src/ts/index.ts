import { makeTurn, startGame } from "./game";
const bootstrap = () => {
  console.log("Testing TS");
  console.log(getGameElement());
};

const start = () => {
  return startGame();
};

const turn = makeTurn;

const getGameElement = () => {
  return document.getElementById("game");
};

export { start, turn, getGameElement, bootstrap };

const bootstrap = () => {
  console.log("Testing TS");
  console.log(getGameElement());
};

const getGameElement = () => {
  return document.getElementById("game");
};

const sum = (x: number, y: number) => {
  return x + y;
};

export { getGameElement, sum, bootstrap };

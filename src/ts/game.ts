import { StoneGrid, Stone, placeStone, createStoneGrid } from "./stoneGrid";

type StoneGame =
  | { state: "notPlaying"; n: { stoneGrid: StoneGrid } }
  | { state: "playing"; p: Playing }
  | { state: "winner"; w: Winner };
interface Player1 {}
interface Player2 {}
interface Playing {
  stoneGrid: StoneGrid;
  turn: Player;
}
interface Winner {
  player: Player1 | Player2;
}
type Player = { type: "player1" } | { type: "player2" };
const playerToStone = (player: Player): Stone => {
  if (player.type == "player1") {
    return { type: "red" };
  } else {
    return { type: "black" };
  }
};
export const startGame = (): StoneGame => {
  return { state: "notPlaying", n: { stoneGrid: createStoneGrid() } };
};

export const makeTurn = (col: number, game: StoneGame): StoneGame => {
  if (game.state == "notPlaying") {
    const newGrid = placeStone(
      playerToStone({ type: "player1" }),
      col,
      game.n.stoneGrid
    );
    return {
      state: "playing",
      p: { stoneGrid: newGrid, turn: { type: "player2" } },
    };
  } else if (game.state == "playing") {
    const newGrid = placeStone(
      playerToStone(game.p.turn),
      col,
      game.p.stoneGrid
    );
    return {
      state: "playing",
      p: { stoneGrid: newGrid, turn: togglePlayer(game.p.turn) },
    };
  } else {
    return game;
  }
};

const togglePlayer = (player: Player): Player => {
  if ((player.type = "player1")) {
    return { type: "player2" };
  } else {
    return { type: "player1" };
  }
};

// importing "deciding sound effect"
import deciding from "./assets/sound-effects/deciding.wav";
// for an item to have a multible other items to beat we're going to turn "beats" into a list instead of a string value ex: beats: ["rock", "scissors"] and then loop through the list to determine the winner.
export const Items = [
  {
    name: "paper",
    beats: "rock",
    position: "left-0 -translate-x-1/2 -translate-y-1/2",
  },
  {
    name: "scissors",
    beats: "paper",
    position: "right-0 translate-x-1/2 -translate-y-1/2",
  },
  {
    name: "rock",
    beats: "scissors",
    position: "bottom-0 left-1/2 -translate-x-1/2 ",
  },
];
export const CalcWinner = (playerPick) => {
  return new Promise((resolve, reject) => {
    // picking an item for the house
    const housePick = Items[Math.floor(Math.random() * (2 - 0 + 1) + 0)];

    // comparing the player pick vs the house's
    let winner = "";

    if (housePick.name === playerPick.beats) {
      winner = "player";
    } else if (housePick.name === playerPick.name) {
      winner = "draw";
    } else {
      winner = "house";
    }
    new Audio(deciding).play();
    // setting up a delay before revealing the winner
    setTimeout(() => {
      resolve({ housePick, winner });
    }, 2000);
  });
};

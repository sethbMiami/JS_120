'use strict';
let readline = require("readline-sync");


class Square {

  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return `${this.marker}`;
  }

  setMarker(marker) {
    this.marker = marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter++) {
      this.squares[counter] = new Square();
    }
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    //SPIKE
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.humanMoves();
      this.board.display();
      if (this.gameOver()) break;

      this.computerMoves();
      this.board.display();
      if (this.gameOver()) break;
      break;
    }
    this.displayResults();
    this.displayGoodByeMessage();
  }

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodByeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {

  }

  humanMoves() {
    let choice;

    while (true) {
      choice = readline.question("Choose a square between 1 and 9: ");
      let integerValue = parseInt(choice, 10);

      if (integerValue >= 1 && integerValue <= 9) {
        break;
      }

      console.log('Sorry, thats not a valid choice.');
      console.log();
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let choice = Math.floor((9 * Math.random()) + 1);
    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return false;
  }
}

let game = new TTTGame();
game.play();
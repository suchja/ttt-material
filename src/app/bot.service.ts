import { Game } from './shared/game';

export class BotService {
    private game: Game;

    constructor(game: Game) { 
        this.game = game;

        this.game.currentPlayerObserver.subscribe({
            next: n => {
                if (n.isPlayedByBot()) {
                    this.makeMove();
                }
            },
        });
    }

    public makeMove() {
        if (this.game.currentPlayer.botMode == 0) {
            this.randomMove();
        }
        else if (this.game.currentPlayer.botMode == 1) {
            this.mediumMove();
            console.log("BotService: Made medium move");
        }
    }

    private randomMove() {
        let x: number;
        let y: number;
        do {
            x = Math.floor((Math.random() * 3));
            y = Math.floor((Math.random() * 3));
        } while (!this.tryPlay(x, y));
    }

    private tryPlay(x: number, y: number): boolean {
        if (this.game.isSquareEmpty(x, y)) {
            this.game.setToken(x, y);
            return true;
        } else {
            return false;
        }
    }

  private mediumMove() {
    let move = this.moveHelper();
    if (move === 0) {
      return; // we already made a move.
    }
    this.randomMove();
  }

  private moveHelper() {
    // console.log("smart move");
    let move: number = 1;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.game.board[i][j] !== "") {
          move++;
        }
      }
    }
    console.log("move #" + move);
    // This should never happen, board is already full:
    if (move > 9) {
      console.log("something went terribly wrong");
      return 0;
    }

    // this has priority:
    if (move >= 5) { // we have at least 2 pieces on the board, try to win now.
      if (this.tryToWin()) {
        console.log("wining move " + move);
        return 0; // we already made a move.
      }
    }

    if (move >= 4) { // opponent has at least 2 pieces on the board, blocking him has priority.
      if (this.block()) {
        console.log("block " + move);
        return 0; // we already made a move.
      } else {
        console.log("no block");
      }
    }

    return move;
  }

  private tryToWin(): boolean {
    return this.checkDouble(this.game.currentPlayer.getSymbol());
  }

  private block(): boolean {
    return this.checkDouble(this.game.opponentOfCurrentPlayer.getSymbol());
  }

  /**
  ** check for opportunity to win the game for either player and win or block.
  */
  private checkDouble(stone: string): boolean {
    // just brute force detect doubles:
    if (this.checkDoubleHorizontal(stone) || this.checkDoubleVertical(stone) || this.checkDoubleDiagonal(stone)) {
      return true;
    } else {
      return false;
    }
  }

  private checkDoubleHorizontal(stone: string): boolean {
    if (this.checkLine(stone, 0) || this.checkLine(stone, 1) || this.checkLine(stone, 2)) {
      return true;
    } else {
      return false;
    }
  }

  private checkDoubleVertical(stone: string): boolean {
    if (this.checkRow(stone, 0) || this.checkRow(stone, 1) || this.checkRow(stone, 2)) {
      return true;
    } else {
      return false;
    }
  }

  private checkLine(stone: string, line: number) {
    if (this.game.board[line][0] === stone && this.game.board[line][0] === this.game.board[line][1] && this.game.board[line][2] === "") {
      this.game.setToken(line, 2);
      return true;
    }
    else if (this.game.board[line][0] === stone && this.game.board[line][0] === this.game.board[line][2] && this.game.board[line][1] === "") {
      this.game.setToken(line, 1);
      return true;
    }
    else if (this.game.board[line][1] === stone && this.game.board[line][1] === this.game.board[line][2] && this.game.board[line][0] === "") {
      this.game.setToken(line, 0);
      return true;
    }
    return false;
  }

  private checkRow(stone: string, row: number) {
    if (this.game.board[0][row] === stone && this.game.board[0][row] === this.game.board[1][row] && this.game.board[2][row] === "") {
      this.game.setToken(2, row);
      return true;
    }
    else if (this.game.board[0][row] === stone && this.game.board[0][row] === this.game.board[2][row] && this.game.board[1][row] === "") {
      this.game.setToken(1, row);
      return true;
    }
    else if (this.game.board[1][row] === stone && this.game.board[1][row] === this.game.board[2][row] && this.game.board[0][row] === "") {
      this.game.setToken(0, row);
      return true;
    }
    return false;
  }

  private checkDoubleDiagonal(stone: string): boolean {
    if (this.game.board[1][1] === stone && this.game.board[1][1] === this.game.board[0][0] && this.game.board[2][2] === "") {
      this.game.setToken(2, 2);
      return true;
    }
    else if (this.game.board[1][1] === stone && this.game.board[1][1] === this.game.board[2][2] && this.game.board[0][0] === "") {
      this.game.setToken(0, 0);
      return true;
    }
    else if (this.game.board[1][1] === stone && this.game.board[1][1] === this.game.board[0][2] && this.game.board[2][0] === "") {
      this.game.setToken(2, 0);
      return true;
    }
    else if (this.game.board[1][1] === stone && this.game.board[1][1] === this.game.board[2][0] && this.game.board[0][2] === "") {
      this.game.setToken(0, 2);
      return true;
    }
    else if (this.game.board[0][0] === stone && this.game.board[0][0] === this.game.board[2][2] && this.game.board[1][1] === "") {
      this.game.setToken(1, 1);
      return true;
    }
    else if (this.game.board[0][2] === stone && this.game.board[0][2] === this.game.board[2][0] && this.game.board[1][1] === "") {
      this.game.setToken(1, 1);
      return true;
    }
    return false;
  }
}
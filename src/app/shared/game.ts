import { Player } from './player';
import { PlayerService } from '../player.service';

export class Game {
  private _board: string[][] = [["", "", ""], ["", "", ""], ["", "", ""]];
  private _currentPlayer: Player;
  private playerX: Player;
  private playerO: Player;

  constructor(playerService: PlayerService) { 
    this.playerX = playerService.getPlayerX();
    this.playerO = playerService.getPlayerO();
    this._currentPlayer = this.playerX;
  }

  get board(): string[][] {
    return this._board;
  }

  public get currentPlayer(): Player {
      return this._currentPlayer
  }

  public set currentPlayer(nextPlayer: Player) {
      this._currentPlayer = nextPlayer; 
  }

  public togglePlayer() {
    if (this._currentPlayer === this.playerX) {
        this.currentPlayer = this.playerO;
    } else {
        this.currentPlayer = this.playerX;
    }
  }

  public isDraw(): boolean {
    if (this.isWon()) {
      return false;
    }
    for (let i = 0; i < this._board.length; i++) {
      for (let j = 0; j < this._board.length; j++) {
        if (this._board[i][j] === "") {
          return false;
        }
      }
    }
    return true;
  }

  public isWon(): boolean {
    if (
      (this._board[0][0] !== "" && this._board[0][0] === this._board[0][1] && this._board[0][0] === this._board[0][2])
      || (this._board[1][0] !== "" && this._board[1][0] === this._board[1][1] && this._board[1][0] === this._board[1][2])
      || (this._board[2][0] !== "" && this._board[2][0] === this._board[2][1] && this._board[2][0] === this._board[2][2])
      || (this._board[0][0] !== "" && this._board[0][0] === this._board[1][0] && this._board[0][0] === this._board[2][0])
      || (this._board[0][1] !== "" && this._board[0][1] === this._board[1][1] && this._board[0][1] === this._board[2][1])
      || (this._board[0][2] !== "" && this._board[0][2] === this._board[1][2] && this._board[0][2] === this._board[2][2])
      || (this._board[0][0] !== "" && this._board[0][0] === this._board[1][1] && this._board[0][0] === this._board[2][2])
      || (this._board[2][0] !== "" && this._board[2][0] === this._board[1][1] && this._board[2][0] === this._board[0][2])
    ) {
      return true;
    } else {
      return false;
    }
  }
}
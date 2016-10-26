import { BehaviorSubject } from "rxjs/Rx";

import { Player } from './player';
import { PlayerService } from '../player.service';

export class Game {
  private _board: string[][] = [["", "", ""], ["", "", ""], ["", "", ""]];
  private _currentPlayer: Player;
  private _currentPlayerObserver: BehaviorSubject<Player>;
  private playerX: Player;
  private playerO: Player;

  constructor(playerService: PlayerService) { 
    this.playerX = playerService.getPlayerX();
    this.playerO = playerService.getPlayerO();
    this._currentPlayer = this.playerX;
    this._currentPlayerObserver = new BehaviorSubject<Player>(this._currentPlayer);
  }

  get board(): string[][] {
    return this._board;
  }

  public get currentPlayer(): Player {
      return this._currentPlayer
  }

  public get currentPlayerObserver(): BehaviorSubject<Player> {
      return this._currentPlayerObserver;
  }

  public setToken(i: number, j: number) {
    if (!this.isWon() && !this.isDraw()) {
      console.log("setToken: " + i + " " + j);
      if (this.board[i][j] === "") {
        this.board[i][j] = this._currentPlayer.getSymbol();
        if (!this.isWon()) {
          this.togglePlayer();
        }
      }
    }
  }

  public isSquareEmpty(i: number, j: number): boolean {
      return this.board[i][j] === "";
  }

  public isDraw(): boolean {
    if (this.isWon()) {
      return false;
    }
    for (let i = 0; i < this._board.length; i++) {
      for (let j = 0; j < this._board.length; j++) {
        if (this.isSquareEmpty(i, j)) {
          return false;
        }
      }
    }
    return true;
  }

  public isWon(): boolean {
    if (
      (!this.isSquareEmpty(0,0) && this._board[0][0] === this._board[0][1] && this._board[0][0] === this._board[0][2])
      || (!this.isSquareEmpty(1,0) && this._board[1][0] === this._board[1][1] && this._board[1][0] === this._board[1][2])
      || (!this.isSquareEmpty(2,0) && this._board[2][0] === this._board[2][1] && this._board[2][0] === this._board[2][2])
      || (!this.isSquareEmpty(0,0) && this._board[0][0] === this._board[1][0] && this._board[0][0] === this._board[2][0])
      || (!this.isSquareEmpty(0,1) && this._board[0][1] === this._board[1][1] && this._board[0][1] === this._board[2][1])
      || (!this.isSquareEmpty(0,2) && this._board[0][2] === this._board[1][2] && this._board[0][2] === this._board[2][2])
      || (!this.isSquareEmpty(0,0) && this._board[0][0] === this._board[1][1] && this._board[0][0] === this._board[2][2])
      || (!this.isSquareEmpty(2,0) && this._board[2][0] === this._board[1][1] && this._board[2][0] === this._board[0][2])
    ) {
      return true;
    } else {
      return false;
    }
  }

  private togglePlayer() {
    if (this._currentPlayer === this.playerX) {
        this._currentPlayer = this.playerO;
    } else {
        this._currentPlayer = this.playerX;
    }

    this._currentPlayerObserver.next(this._currentPlayer);
  }
}
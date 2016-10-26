import { Component, OnInit } from '@angular/core';

import { PlayerService } from '../player.service';
import { Player } from '../shared/player';
import { Game } from '../shared/game';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent{
  private game: Game = new Game();
  private playerX: Player;
  private playerO: Player;
  private currentPlayer: Player;

  constructor(playerService: PlayerService) { 
    this.playerX = playerService.getPlayerX();
    this.playerO = playerService.getPlayerO();
    this.currentPlayer = this.playerX;
  }

  private setToken(i: number, j: number) {
    if (!this.isWon() && !this.isDraw()) {
      console.log("setToken: " + i + " " + j);
      if (this.game.board[i][j] === "") {
        this.game.board[i][j] = this.currentPlayer.getSymbol();
        if (!this.isWon()) {
          if (this.currentPlayer === this.playerX) {
            this.currentPlayer = this.playerO;
          } else {
            this.currentPlayer = this.playerX;
          }
        }
      }
    }
  }

  private isDraw(): boolean {
    if (this.isWon()) {
      return false;
    }
    for (let i = 0; i < this.game.board.length; i++) {
      for (let j = 0; j < this.game.board.length; j++) {
        if (this.game.board[i][j] === "") {
          return false;
        }
      }
    }
    return true;
  }

  private isWon(): boolean {
    if (
      (this.game.board[0][0] !== "" && this.game.board[0][0] === this.game.board[0][1] && this.game.board[0][0] === this.game.board[0][2])
      || (this.game.board[1][0] !== "" && this.game.board[1][0] === this.game.board[1][1] && this.game.board[1][0] === this.game.board[1][2])
      || (this.game.board[2][0] !== "" && this.game.board[2][0] === this.game.board[2][1] && this.game.board[2][0] === this.game.board[2][2])
      || (this.game.board[0][0] !== "" && this.game.board[0][0] === this.game.board[1][0] && this.game.board[0][0] === this.game.board[2][0])
      || (this.game.board[0][1] !== "" && this.game.board[0][1] === this.game.board[1][1] && this.game.board[0][1] === this.game.board[2][1])
      || (this.game.board[0][2] !== "" && this.game.board[0][2] === this.game.board[1][2] && this.game.board[0][2] === this.game.board[2][2])
      || (this.game.board[0][0] !== "" && this.game.board[0][0] === this.game.board[1][1] && this.game.board[0][0] === this.game.board[2][2])
      || (this.game.board[2][0] !== "" && this.game.board[2][0] === this.game.board[1][1] && this.game.board[2][0] === this.game.board[0][2])
    ) {
      return true;
    } else {
      return false;
    }
  }

  private getGameState(): number {
    if (this.isWon()) {
      return 2;
    }
    if (this.isDraw()) {
      return 1;
    }
    return 0;
  }
}

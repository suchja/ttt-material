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
  private game: Game;

  constructor(playerService: PlayerService) { 
    this.game = new Game(playerService);
  }

  private setToken(i: number, j: number) {
    if (!this.game.isWon() && !this.game.isDraw()) {
      console.log("setToken: " + i + " " + j);
      if (this.game.board[i][j] === "") {
        this.game.board[i][j] = this.game.currentPlayer.getSymbol();
        if (!this.game.isWon()) {
          this.game.togglePlayer();
        }
      }
    }
  }

/*  private getGameState(): number {
    if (this.isWon()) {
      return 2;
    }
    if (this.isDraw()) {
      return 1;
    }
    return 0;
  }*/
}

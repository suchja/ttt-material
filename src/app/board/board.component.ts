import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent{
  private board: string[][] = [["", "", ""], ["", "", ""], ["", "", ""]];
  private player: string = "x";
  constructor() { }

  private setToken(i: number, j: number) {
    if (!this.isWon() && !this.isDraw()) {
      console.log("setToken: " + i + " " + j);
      if (this.board[i][j] === "") {
        this.board[i][j] = this.player;
        if (!this.isWon()) {
          if (this.player === "x") {
            this.player = "o";
          } else {
            this.player = "x";
          }
        }
      }
    }
  }

  private isDraw(): boolean {
    if (this.isWon()) {
      return false;
    }
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {
        if (this.board[i][j] === "") {
          return false;
        }
      }
    }
    return true;
  }

  private isWon(): boolean {
    if (
      (this.board[0][0] !== "" && this.board[0][0] === this.board[0][1] && this.board[0][0] === this.board[0][2])
      || (this.board[1][0] !== "" && this.board[1][0] === this.board[1][1] && this.board[1][0] === this.board[1][2])
      || (this.board[2][0] !== "" && this.board[2][0] === this.board[2][1] && this.board[2][0] === this.board[2][2])
      || (this.board[0][0] !== "" && this.board[0][0] === this.board[1][0] && this.board[0][0] === this.board[2][0])
      || (this.board[0][1] !== "" && this.board[0][1] === this.board[1][1] && this.board[0][1] === this.board[2][1])
      || (this.board[0][2] !== "" && this.board[0][2] === this.board[1][2] && this.board[0][2] === this.board[2][2])
      || (this.board[0][0] !== "" && this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2])
      || (this.board[2][0] !== "" && this.board[2][0] === this.board[1][1] && this.board[2][0] === this.board[0][2])
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

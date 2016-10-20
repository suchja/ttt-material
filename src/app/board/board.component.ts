import { Component, OnInit } from '@angular/core';

import { Square } from '../shared/square'

const SQUARES: Square[][] = [
  [
    new Square(0, 0, ""),
    new Square(1, 0, ""),
    new Square(2, 0, "")
  ],
  [
    new Square(0, 1, ""),
    new Square(1, 1, ""),
    new Square(2, 1, "")
  ],
  [
    new Square(0, 2, ""),
    new Square(1, 2, ""),
    new Square(2, 2, "")
  ]
];

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent{
  //private board: string[][] = [["", "", ""], ["", "", ""], ["", "", ""]];
  private board: Square[][] = SQUARES;
  private player: string = "x";
  constructor() { }

  private setToken(i: number, j: number) {
    if (!this.isWon() && !this.isDraw()) {
      console.log("setToken: " + i + " " + j);
      if (this.board[i][j].isEmpty()) {
        this.board[i][j].token = this.player;
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
        if (this.board[i][j].isEmpty()) {
          return false;
        }
      }
    }
    return true;
  }

  private isWon(): boolean {
    if (
      (!this.board[0][0].isEmpty() && this.board[0][0] === this.board[0][1] && this.board[0][0] === this.board[0][2])
      || (!this.board[1][0].isEmpty() && this.board[1][0] === this.board[1][1] && this.board[1][0] === this.board[1][2])
      || (!this.board[2][0].isEmpty() && this.board[2][0] === this.board[2][1] && this.board[2][0] === this.board[2][2])
      || (!this.board[0][0].isEmpty() && this.board[0][0] === this.board[1][0] && this.board[0][0] === this.board[2][0])
      || (!this.board[0][1].isEmpty() && this.board[0][1] === this.board[1][1] && this.board[0][1] === this.board[2][1])
      || (!this.board[0][2].isEmpty() && this.board[0][2] === this.board[1][2] && this.board[0][2] === this.board[2][2])
      || (!this.board[0][0].isEmpty() && this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2])
      || (!this.board[2][0].isEmpty() && this.board[2][0] === this.board[1][1] && this.board[2][0] === this.board[0][2])
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

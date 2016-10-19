import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent{
  private player: string = "x";
  constructor() {
    let that = this;
    setTimeout(function() {
      that.player = "o";
    }, 2000);
  }
}

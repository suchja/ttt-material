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
}

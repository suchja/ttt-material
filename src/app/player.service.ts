import { Injectable } from '@angular/core';

import { Player } from './shared/player';

@Injectable()
export class PlayerService {
  private playerX: Player;
  private playerO: Player;

  constructor() { 
    this.playerX = new Player(0, "X");
    this.playerO = new Player(1, "O");    
  }

  public getPlayerX(): Player {
    return this.playerX;
  }

  public getPlayerO(): Player {
    return this.playerO;
  }
}

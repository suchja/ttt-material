import { Component } from '@angular/core';

import { Player } from '../shared/player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  private playerX: Player;
  private playerO: Player;

  constructor(playerService: PlayerService) {
    this.playerX = playerService.getPlayerX();
    this.playerO = playerService.getPlayerO();
  }

}

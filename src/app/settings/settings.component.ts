import { Component } from '@angular/core';

import { Player } from '../shared/player';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  private playerX: Player;
  private playerO: Player;

  constructor() {
    this.playerX = new Player(0, "X");
    this.playerO = new Player(1, "O");
  }

}

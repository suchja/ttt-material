import { Component, Input } from '@angular/core';

import { Player } from '../shared/player';

@Component({
  selector: 'app-player-settings',
  templateUrl: './player-settings.component.html',
  styleUrls: ['./player-settings.component.css']
})
export class PlayerSettingsComponent {
  @Input() private player: Player;
  private test: number = 1;
  
  constructor() { }

}

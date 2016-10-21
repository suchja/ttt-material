import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-settings',
  templateUrl: './player-settings.component.html',
  styleUrls: ['./player-settings.component.css']
})
export class PlayerSettingsComponent {
  @Input() private id: number;
  @Input() private name: string;
  private mode: number;

  constructor() { }

}

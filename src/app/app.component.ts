import { Component, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig } from "@angular/material";

import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(public dialog: MdDialog, public vcr: ViewContainerRef) {}

  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(SettingsComponent, config);
  }
}

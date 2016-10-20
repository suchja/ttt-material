import { Component, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig } from "@angular/material";

@Component({
  selector: 'settings-dialog',
  template: `
    <label>Settings currently not available!</label>
  `
})
export class SettingsDialog {

}

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
    this.dialog.open(SettingsDialog, config);
  }
}

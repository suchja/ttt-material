import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { SettingsComponent } from './settings/settings.component';
import { PlayerSettingsComponent } from './player-settings/player-settings.component';
import { PlayerService } from './player.service';
import { GameService } from './game.service';
import { BotService } from './bot.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent,
    SettingsComponent,
    PlayerSettingsComponent
  ],
  entryComponents: [
    SettingsComponent,
    AppComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    GameService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

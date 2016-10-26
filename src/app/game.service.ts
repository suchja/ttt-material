import { Injectable } from '@angular/core';

import { Game } from './shared/game';
import { PlayerService } from './player.service';

@Injectable()
export class GameService {
    private _game: Game;

    constructor(playerService: PlayerService) { 
        this._game = new Game(playerService);
    }

    public get game(): Game {
        return this._game;
    }
}
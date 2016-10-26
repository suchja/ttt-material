import { Injectable } from '@angular/core';

import { Game } from './shared/game';
import { PlayerService } from './player.service';
import { BotService } from './bot.service';

@Injectable()
export class GameService {
    private _game: Game;
    private _bot: BotService;

    constructor(playerService: PlayerService) { 
        this._game = new Game(playerService);
        this._bot = new BotService(this._game);
    }

    public get game(): Game {
        return this._game;
    }
}
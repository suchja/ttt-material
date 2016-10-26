import { Player } from './player';
import { PlayerService } from '../player.service';

export class Game {
  private _board: string[][] = [["", "", ""], ["", "", ""], ["", "", ""]];
  private _currentPlayer: Player;
  private playerX: Player;
  private playerO: Player;

  constructor(playerService: PlayerService) { 
    this.playerX = playerService.getPlayerX();
    this.playerO = playerService.getPlayerO();
    this._currentPlayer = this.playerX;
  }

  get board(): string[][] {
    return this._board;
  }

  public get currentPlayer(): Player {
      return this._currentPlayer
  }

  public set currentPlayer(nextPlayer: Player) {
      this._currentPlayer = nextPlayer; 
  }

  public togglePlayer() {
    if (this._currentPlayer === this.playerX) {
        this.currentPlayer = this.playerO;
    } else {
        this.currentPlayer = this.playerX;
    }
  }
}
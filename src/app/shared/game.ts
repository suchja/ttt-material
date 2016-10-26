export class Game {
  private _board: string[][] = [["", "", ""], ["", "", ""], ["", "", ""]];

  get board(): string[][] {
    return this._board;
  }
}
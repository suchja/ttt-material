export class Square {
  xPositionOnBoard: number;
  yPositionOnBoard: number;
  token: string;

  constructor(x: number, y: number, token: string) {
      this.xPositionOnBoard = x;
      this.yPositionOnBoard = y;
      this.token = token;
  }
  
  /**
   * isEmpty
   */
  public isEmpty(): boolean {
      return this.token === "";
  }
}
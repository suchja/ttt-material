export class Player {
    private id: number;
    private name: string;
    private symbol: string;
    private mode: number;
    private _botMode: number;

    constructor(id: number, symbol: string) {
        this.id = id;
        this.name = symbol;
        this.symbol = symbol;
        this.mode = 0;
        this._botMode = 0;
    }

    public getSymbol(): string {
        return this.symbol;
    }

    public isPlayedByBot(): boolean {
        return this.mode == 1;
    }

    public get botMode(): number {
        return this._botMode;
    }

    public set botMode(mode: number) {
        this._botMode = mode;
    }
}

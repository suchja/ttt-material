export class Player {
    private id: number;
    private name: string;
    private symbol: string;
    private mode: number;
    private botMode: number;

    constructor(id: number, symbol: string) {
        this.id = id;
        this.name = symbol;
        this.symbol = symbol;
        this.mode = 0;
        this.botMode = 0;
    }

    public getSymbol(): string {
        return this.symbol;
    }

    public isPlayedByBot(): boolean {
        return this.mode == 1;
    }
}

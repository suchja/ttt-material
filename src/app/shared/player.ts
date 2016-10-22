export class Player {
    private id: number;
    private name: string;
    private mode: number;
    private botMode: number;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.mode = 0;
        this.botMode = 0;
    }

    public updateBotMode() {
        if (this.mode === 1) {
            this.botMode = this.botMode;
        }
    }
}

export class Player {
    private id: number;
    private name: string;
    private brain: number;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.brain = 0;
    }
}

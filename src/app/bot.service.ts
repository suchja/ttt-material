import { Game } from './shared/game';

export class BotService {
    private game: Game;

    constructor(game: Game) { 
        this.game = game;

        this.game.currentPlayerObserver.subscribe({
            next: n => {
                if (n.isPlayedByBot()) {
                    this.makeMove();
                }
            },
        });
    }

    public makeMove() {
        this.randomMove();
    }

    private randomMove() {
        let x: number;
        let y: number;
        do {
            x = Math.floor((Math.random() * 3));
            y = Math.floor((Math.random() * 3));
        } while (!this.tryPlay(x, y));
    }

    private tryPlay(x: number, y: number): boolean {
        if (this.game.isSquareEmpty(x, y)) {
            this.game.setToken(x, y);
            return true;
        } else {
            return false;
        }
    }
}
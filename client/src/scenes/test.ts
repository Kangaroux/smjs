import { Scene } from "../scene";
import { Img } from "../drawing/objects/image";
import { Game } from "../game";

export class TestScene implements Scene {
    game: Game;
    images: Img[];

    constructor(game: Game) {
        this.game = game;
        this.images = [
            new Img(game.images["ArrowUp"]),
            new Img(game.images["Receptor"]),
            new Img(game.images["ReceptorGlow"]),
        ];

        let nextX = 0;

        for (let i = 0; i < this.images.length; i++) {
            this.images[i].x = nextX;
            nextX += this.images[i].w;
        }
    }

    update(deltaTime: number) {
        for (let i = 0; i < this.images.length; i++) {
            this.images[i].draw(this.game.canvas);
        }
    }
}
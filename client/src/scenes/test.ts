import { Scene } from "../scene";
import { Img } from "../drawing/objects/image";
import { Game } from "../game";
import { DrawableGroup } from "../drawing/drawable";

export class TestScene implements Scene {
    game: Game;
    imgGroup: DrawableGroup;

    constructor(game: Game) {
        this.game = game;
        this.imgGroup = new DrawableGroup([
            new Img(game.images["ArrowUp"]),
            new Img(game.images["Receptor"]),
            new Img(game.images["ReceptorGlow"]),
        ]);

        this.imgGroup.getPos().add(100, 50);

        let nextX = 0;

        for (let i = 0; i < this.imgGroup.length; i++) {
            let rect = this.imgGroup.items[i].getRect();

            rect.x = nextX;
            nextX += rect.w;
        }
    }

    update(deltaTime: number) {
        this.imgGroup.draw(this.game.canvas);
    }
}
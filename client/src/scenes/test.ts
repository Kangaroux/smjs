import { Scene } from "../scene";
import { Img } from "../drawing/objects/image";
import { Game } from "../game";
import { ObjectGroup } from "../drawing/object";

export class TestScene implements Scene {
    game: Game;
    imgGroup: ObjectGroup;

    constructor(game: Game) {
        this.game = game;
        this.imgGroup = new ObjectGroup([
            new Img(game.images["ArrowUp"]),
            new Img(game.images["Receptor"]),
            new Img(game.images["ReceptorGlow"]),
        ]);

        let nextX = 0;

        for (let i = 0; i < this.imgGroup.length; i++) {
            let rect = this.imgGroup.items[i].getRect();

            rect.x = nextX;
            nextX += rect.w;
        }
    }

    update(deltaTime: number) {
        let pos = this.imgGroup.getPos();
        pos.x += (300 * deltaTime / 1000.0);

        if (pos.x > 300) pos.x = 0;

        this.imgGroup.draw(this.game.canvas);
    }
}
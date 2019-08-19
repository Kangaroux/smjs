import { Scene } from "../scene";
import { Img } from "../drawing/objects/image";
import { Game } from "../game";
import { DrawableGroup } from "../drawing/object";

export class TestScene extends Scene {
    imgGroup: DrawableGroup;

    constructor(game: Game) {
        super();

        this.game = game;
        this.imgGroup = new DrawableGroup([
            new Img(game.images["ArrowUp"]),
            new Img(game.images["Receptor"]),
            new Img(game.images["ReceptorGlow"]),
        ]);

        let nextX = 0;

        this.imgGroup.items.forEach((k) => {
            let rect = k.getRect();

            rect.x = nextX;
            nextX += rect.w;
        });

        this.layers.push(this.imgGroup);
    }
}
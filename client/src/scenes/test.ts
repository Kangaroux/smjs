import { Scene } from "../scene";
import { Img } from "../drawing/objects/image";
import { Game } from "../game";
import { Object2D } from "../drawing/object";
import { GraphicActor } from "../entities/actors/graphicActor";

export class TestScene extends Scene {
    images: GraphicActor;

    constructor(game: Game) {
        super();

        this.game = game;
        this.images = new GraphicActor(0, 0,
            new Img(game.images["ArrowUp"]),
            new Img(game.images["Receptor"]),
            new Img(game.images["ReceptorGlow"]),
        );

        let nextX = 0;

        this.images.group.objects.forEach((k) => {
            let rect = (<Object2D>k).getRect();

            rect.x = nextX;
            nextX += rect.w;
        });

        this.layers.push(this.images);
    }
}
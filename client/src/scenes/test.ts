import { Scene } from "../scene";
import { Img } from "../drawing/objects/image";
import { Game } from "../game";
import { Object2D } from "../drawing/object";
import { GraphicActor } from "../entity/actors/graphicActor";

export class TestScene extends Scene {
    images: GraphicActor;

    constructor(game: Game) {
        super(game);
        this.create();
    }

    create() {
        this.images = new GraphicActor(0, 0,
            new Img(this.game.images.ArrowUp),
            new Img(this.game.images.Receptor),
            new Img(this.game.images.ReceptorGlow),
        );

        let nextX = 0;

        this.images.group.objects.forEach((k) => {
            const rect = (<Object2D>k).getRect();

            rect.x = nextX;
            nextX += rect.w;
        });

        this.layers.push(this.images);
    }
}

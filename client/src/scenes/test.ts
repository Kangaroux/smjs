import { Scene } from "../scene";
import { Img } from "../drawing/objects/image";
import { Game } from "../game";
import { Object2D } from "../drawing/object";
import { Text } from "../drawing/objects/text";
import { GraphicActor } from "../entity/actors/graphicActor";
import { Color } from "../drawing/styles/color";
import { Font } from "../drawing/styles/font";

export class TestScene extends Scene {
    images: GraphicActor;

    constructor(game: Game) {
        super(game);
        this.create();
    }

    create() {
        this.images = new GraphicActor(0, 0,
            new Img(this.game.resc.images.ArrowUp),
            new Img(this.game.resc.images.Receptor),
            new Img(this.game.resc.images.ReceptorGlow),
        );

        let nextX = 0;

        this.images.group.objects.forEach((k) => {
            const rect = (<Object2D>k).getRect();

            rect.x = nextX;
            nextX += rect.w;
        });

        const text = new Text("", 0, 0);
        text.color = Color.WHITE;
        text.font = new Font("32px", "serif");

        const textActor = new GraphicActor(300, 300, text);
        textActor.update = () => text.text = this.game.state.mouse.getPosition().toString();

        this.layers.push(textActor);
        this.layers.push(this.images);
    }
}

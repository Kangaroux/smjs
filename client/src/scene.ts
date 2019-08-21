import { Actor } from "./entity/actor";
import { IUpdateable } from "./interfaces";
import { Game } from "./game";

export abstract class Scene implements IUpdateable {
    game: Game;
    layers: Actor[];

    constructor() {
        this.layers = [];
    }

    draw() {
        this.layers.forEach((k) => {
            k.draw(this.game.canvas, 0, 0);
        });
    }

    update(deltaTime: number) {
        this.layers.forEach((k) => {
            k.update(deltaTime);
        });
    }
}

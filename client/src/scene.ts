import { Actor, Updateable } from "./types";
import { Game } from "./game";

export abstract class Scene implements Updateable {
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
        })
    }
}
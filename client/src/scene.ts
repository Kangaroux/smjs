import { Actor, DOMEvent, EventDispatcher, EventHandler, Updateable } from "./types";
import { Game } from "./game";

export abstract class Scene implements EventDispatcher, Updateable {
    game: Game;
    layers: Actor[];
    listeners: EventHandler[];

    constructor() {
        this.layers = [];
    }

    notifyDOMEvent(e: DOMEvent) {
        this.listeners.forEach((k) => k.handleDOMEvent(e));
    }

    update(deltaTime: number) {
        this.layers.forEach((k) => {
            k.update(deltaTime);
        })

        this.layers.forEach((k) => {
            k.draw(this.game.canvas, 0, 0);
        });
    }
}
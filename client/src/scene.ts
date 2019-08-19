import { Component } from "./drawing/component";
import { Game } from "./game";
import { EventHandler, DOMEvent } from "./event";

export abstract class Scene implements EventHandler {
    game: Game;

    /**
     * The draw layers in the scene. This affects what order the objects in the scene
     * are drawn, as well as which objects will receive DOM events first.
     *
     * Scenes are rendered back-to-front, and DOM events are propagated front-to-back.
     * The bottom-most layer is index 0.
     */
    layers: Component[];

    constructor() {
        this.layers = [];
    }

    handleDOMEvent(e: DOMEvent): boolean {
        for (let i = this.layers.length - 1; i >= 0; i--) {
            this.layers[i].handleDOMEvent(e);
        }

        return true;
    }

    /**
     * Redraws the scene with the given delta time in milliseconds
     */
    update(deltaTime: number) {
        this.layers.forEach((k) => {
            k.draw(this.game.canvas, 0, 0);
        })
    }
}
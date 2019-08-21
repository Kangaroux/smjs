import { Actor, Drawable } from "../../types";
import { DrawableGroup } from "../../drawing/object";
import { Canvas } from "../../canvas";

export class GraphicActor extends Actor {
    group: DrawableGroup;

    constructor(x: number, y: number, ...objects: Drawable[]) {
        super();

        this.group = new DrawableGroup(x, y, objects);
    }

    draw(c: Canvas, offsetX: number, offsetY: number) {
        this.group.draw(c, offsetX, offsetY);
    }
}
import { Actor } from "../actor";
import { IDrawable } from "../../interfaces";
import { DrawableGroup } from "../../drawing/group";
import { Canvas } from "../../canvas";

export class GraphicActor extends Actor {
    group: DrawableGroup;

    constructor(x: number, y: number, ...objects: IDrawable[]) {
        super();

        this.group = new DrawableGroup(x, y, objects);
    }

    draw(c: Canvas, offsetX: number, offsetY: number) {
        this.group.draw(c, offsetX, offsetY);
    }
}

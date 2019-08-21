import { IDrawable } from "../interfaces";
import { Point } from "./point";
import { Canvas } from "../canvas";

export class DrawableGroup implements IDrawable {
    hide: boolean;
    objects: IDrawable[];
    point: Point;

    constructor(x: number, y: number, objects?: IDrawable[]) {
        this.objects = objects || [];
        this.point = new Point(x, y);
    }

    add(o: IDrawable) {
        this.objects.push(o);
    }

    draw(c: Canvas, x: number, y: number) {
        if (this.hide) {
            return;
        }

        this.objects.forEach((k) => k.draw(c, x + this.point.x, y + this.point.y));
    }

    get length(): number {
        return this.objects.length;
    }
}

import { Canvas } from "../canvas";
import { Point, Rect } from "../util/coordinate";
import { _default } from "../util/util";

export interface Object {
    getPos(): Point;
    getRect(): Rect;
}

export interface Drawable extends Object {
    draw(c: Canvas, offsetX?: number, offsetY?: number): void;
}

export class DrawableGroup implements Drawable {
    point: Point
    items: Array<Drawable>;

    constructor(items?: Drawable[]) {
        this.items = _default(items, []);
        this.point = new Point(0, 0);
    }

    draw(c: Canvas, offsetX?: number, offsetY?: number) {
        for (let obj of this.items) {
            obj.draw(c, this.point.x, this.point.y);
        }
    }

    get length(): number {
        return this.items.length;
    }

    getPos(): Point {
        return this.point;
    }

    getRect(): Rect {
        // TODO: Calculate width and height of the group
        return this.point.asRect();
    }
}
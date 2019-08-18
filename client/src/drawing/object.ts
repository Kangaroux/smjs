import { Canvas } from "../canvas";
import { Point, Rect } from "../util/coordinate";
import { _default } from "../util/util";

export abstract class Object {
    rect: Rect;

    constructor() {
        this.rect = new Rect(0, 0, 0, 0);
    }

    draw(c: Canvas, offsetX?: number, offsetY?: number) {
        throw new Error("not implemented");
    }

    getPos(): Point {
        return this.rect;
    }

    getRect(): Rect {
        return this.rect;
    }

    moveTo(p: Point) {
        this.rect.x = p.x;
        this.rect.y = p.y;
    }
}

export class ObjectGroup extends Object {
    items: Array<Object>;

    constructor(items?: Object[]) {
        super();

        this.items = _default(items, []);
    }

    draw(c: Canvas, offsetX?: number, offsetY?: number) {
        for (let obj of this.items) {
            obj.draw(c, this.rect.x, this.rect.y);
        }
    }

    get length(): number {
        return this.items.length;
    }
}
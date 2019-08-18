import { Canvas } from "../canvas";
import { Point, Rect } from "../util/coordinate";
import { _default } from "../util/util";

export abstract class Object2D {
    parent: Object2D;
    rect: Rect;

    constructor(x?: number, y?: number, w?: number, h?: number) {
        x = _default(x, 0);
        y = _default(y, 0);
        w = _default(w, 0);
        h = _default(h, 0);

        this.parent = null;
        this.rect = new Rect(x, y, w, h);
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

export class ObjectGroup extends Object2D {
    items: Array<Object2D>;

    constructor(items?: Object2D[]) {
        super();

        this.items = [];
        items = _default(items, []);
        items.forEach((k) => this.add(k));
    }

    add(o: Object2D) {
        o.parent = this;
        this.items.push(o);
    }

    draw(c: Canvas, offsetX?: number, offsetY?: number) {
        this.items.forEach((k) => k.draw(c, this.rect.x, this.rect.y));
    }

    get length(): number {
        return this.items.length;
    }
}
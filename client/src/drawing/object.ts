import { Canvas } from "../canvas";
import { Point, Rect } from "../util/coordinate";
import { _default } from "../util/util";

export abstract class Object {
    parent: Object;
    rect: Rect;

    constructor() {
        this.parent = null;
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

        items = _default(items, []);
        items.forEach((k) => this.add(k));
    }

    add(o: Object) {
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
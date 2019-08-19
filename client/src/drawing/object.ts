import { Canvas } from "../canvas";
import { Entity } from "../entities/entity";
import { Point, Rect } from "../util/coordinate";
import { _default } from "../util/util";

export interface Drawable {
    hide: boolean;
    draw(c: Canvas, offsetX: number, offsetY: number): void;
}

export abstract class Object2D implements Drawable {
    hide: boolean;
    rect: Rect;

    constructor(x?: number, y?: number, w?: number, h?: number) {
        x = _default(x, 0);
        y = _default(y, 0);
        w = _default(w, 0);
        h = _default(h, 0);

        this.hide = false;
        this.rect = new Rect(x, y, w, h);
    }

    /**
     * Method that handles the actual drawing logic. The (x, y) coords should be used
     * since they take into account offsets from the parent
     */
    abstract _draw(c: Canvas, x: number, y: number): void;

    draw(c: Canvas, offsetX: number, offsetY: number) {
        if (this.hide) return;

        this._draw(c, this.rect.x + offsetX, this.rect.y + offsetY);
    }

    getPos(): Point {
        return this.rect;
    }

    getRect(): Rect {
        return this.rect;
    }
}

export class DrawableGroup implements Drawable {
    hide: boolean;
    items: Array<Drawable>;

    constructor(items?: Drawable[]) {
        this.items = _default(items, []);
    }

    add(o: Drawable) {
        this.items.push(o);
    }

    draw(c: Canvas, x: number, y: number) {
        if (this.hide) return;

        this.items.forEach((k) => k.draw(c, x, y));
    }

    get length(): number {
        return this.items.length;
    }
}
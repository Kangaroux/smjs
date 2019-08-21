import { Canvas } from "../canvas";
import { Drawable } from "../types";
import { Point, Rect } from "../util/coordinate";

export abstract class Object2D implements Drawable {
    hide: boolean;
    rect: Rect;

    constructor(x: number, y: number, w: number, h: number) {
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
    objects: Array<Drawable>;
    point: Point;

    constructor(x: number, y: number, objects?: Drawable[]) {
        this.objects = objects || [];
        this.point = new Point(x, y);
    }

    add(o: Drawable) {
        this.objects.push(o);
    }

    draw(c: Canvas, x: number, y: number) {
        if (this.hide) return;

        this.objects.forEach((k) => k.draw(c, x + this.point.x, y + this.point.y));
    }

    get length(): number {
        return this.objects.length;
    }
}
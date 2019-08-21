import { Canvas } from "../canvas";
import { IDrawable } from "../interfaces";
import { Point } from "./point";
import { Rect } from "./rect";

export abstract class Object2D implements IDrawable {
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
        if (this.hide) {
            return;
        }

        this._draw(c, this.rect.x + offsetX, this.rect.y + offsetY);
    }

    getPos(): Point {
        return this.rect;
    }

    getRect(): Rect {
        return this.rect;
    }
}

import { _default } from "../../util/util";
import { Canvas } from "../../canvas";
import { Drawable } from "../drawable";
import { ImgResource as ImgResource } from "../../resource";
import { Point, Rect } from "../../util/coordinate";

/**
 * A drawable image
 */
export class Img implements Drawable {
    rect: Rect;
    readonly data: ImgResource;

    constructor(img: ImgResource, w?: number, h?: number) {
        w = _default(w, img.el.naturalWidth);
        h = _default(h, img.el.naturalHeight);

        this.rect = new Rect(0, 0, w, h);
        this.data = img;
    }

    draw(c: Canvas, offsetX?: number, offsetY?: number): void {
        const r = this.rect;
        offsetX = _default(offsetX, 0);
        offsetY = _default(offsetY, 0);

        c.ctx.drawImage(this.data.el, r.x + offsetX, r.y + offsetY, r.w, r.h);
    }

    getPos(): Point {
        return this.rect;
    }

    getRect(): Rect {
        return this.rect;
    }
}
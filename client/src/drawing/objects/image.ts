import { Canvas } from "../../canvas";
import { ImgResource } from "../../resource";
import { Object2D } from "../object";
import { Rect } from "../../util/coordinate";

/**
 * A drawable image
 */
export class Img extends Object2D {
    readonly data: ImgResource;

    constructor(img: ImgResource, w?: number, h?: number) {
        w = (w === undefined) ? img.el.naturalWidth : w;
        h = (h === undefined) ? img.el.naturalHeight : h;

        super(0, 0, w, h);

        this.rect = new Rect(0, 0, w, h);
        this.data = img;
    }

    _draw(c: Canvas, x: number, y: number): void {
        c.ctx.drawImage(this.data.el, x, y, this.rect.w, this.rect.h);
    }
}

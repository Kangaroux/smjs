import { Canvas } from "../../canvas";
import { ImageResource } from "../../resource/image";
import { Object2D } from "../object";
import { Rect } from "../../drawing/rect";

/**
 * A drawable image
 */
export class Img extends Object2D {
    readonly data: ImageResource;

    constructor(img: ImageResource, w?: number, h?: number) {
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

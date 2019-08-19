import { _default } from "../../util/util";
import { Canvas } from "../../canvas";
import { Object2D } from "../object";
import { ImgResource as ImgResource } from "../../resource";
import { Rect } from "../../util/coordinate";

/**
 * A drawable image
 */
export class Img extends Object2D {
    readonly data: ImgResource;

    constructor(img: ImgResource, w?: number, h?: number) {
        super();
        w = _default(w, img.el.naturalWidth);
        h = _default(h, img.el.naturalHeight);

        this.rect = new Rect(0, 0, w, h);
        this.data = img;
    }

    draw(c: Canvas, x: number, y: number): void {
        c.ctx.drawImage(this.data.el, x, y, this.rect.w, this.rect.h);
    }
}

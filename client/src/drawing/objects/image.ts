import { Canvas } from "../../canvas";
import { Drawable } from "../drawable";
import { ImgResource as ImgResource } from "../../resource";
import { Rect } from "../../util/coordinate";

/**
 * A drawable image
 */
export class Img extends Rect implements Drawable {
    readonly data: ImgResource;

    constructor(img: ImgResource, w?: number, h?: number) {
        w = (w === undefined) ? img.el.naturalWidth : w;
        h = (h === undefined) ? img.el.naturalHeight : h;

        super(0, 0, w, h);
        this.data = img;
    }

    draw(c: Canvas): void {
        c.ctx.drawImage(this.data.el, this.x, this.y, this.w, this.h);
    }
}

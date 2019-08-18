import { ImgResource as ImgResource } from "./resource";

/**
 * A drawable image
 */
export class Img {
    readonly img: ImgResource;
    w: number;
    h: number;

    constructor(img: ImgResource, w?: number, h?: number) {
        this.img = img;

        if (w === undefined) {
            w = img.img.naturalWidth;
        }

        if (h === undefined) {
            h = img.img.naturalWidth;
        }

        this.w = w;
        this.h = h;
    }
}

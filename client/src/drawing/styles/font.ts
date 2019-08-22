import { IStyle } from "../../interfaces";
import { Canvas } from "../../canvas";

export class Font implements IStyle {
    font: string;
    size: string;

    constructor(size: string, font: string) {
        this.font = font;
        this.size = size;
    }

    apply(c: Canvas): void {
        c.ctx.font = this.size + " " + this.font;
    }
}

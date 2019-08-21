import { Canvas } from "../../canvas";
import { IStyle } from "../../interfaces";

export enum LineCap {
    BUTT = "butt",
    ROUND = "round",
    SQUARE = "square",
}

export enum LineJoin {
    BEVEL = "bevel",
    ROUND = "round",
    MITER = "miter",
}

export class LineStyle implements IStyle {
    cap: LineCap;
    join: LineJoin;

    constructor(cap?: LineCap, join?: LineJoin) {
        this.cap = cap;
        this.join = join;
    }

    apply(c: Canvas): void {
        if (this.cap != null) {
            c.ctx.lineCap = this.cap;
        }

        if (this.join != null) {
            c.ctx.lineJoin = this.join;
        }
    }
}

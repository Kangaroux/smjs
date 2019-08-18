import { Style } from "../property";
import { Canvas } from "../../canvas";

export const enum LineCap {
    BUTT = "butt",
    ROUND = "round",
    SQUARE = "square"
}

export const enum LineJoin {
    BEVEL = "bevel",
    ROUND = "round",
    MITER = "miter"
}

export class LineStyle implements Style {
    cap: LineCap
    join: LineJoin

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
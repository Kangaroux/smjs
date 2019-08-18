import { Rect } from "../../util/coordinate";
import { Object2D } from "../object";
import { Color } from "../styles/color";
import { Canvas } from "../../canvas";
import { _default } from "../../util/util";
import { Stroke } from "../styles/stroke";

export class Rectangle extends Object2D {
    color: Color
    stroke: Stroke;

    constructor(x: number, y: number, w: number, h: number, color?: Color) {
        super();
        this.color = color || Color.WHITE;
        this.rect = new Rect(x, y, w, h);
    }

    draw(c: Canvas, offsetX?: number, offsetY?: number) {
        const r = this.rect;
        offsetX = _default(offsetX, 0);
        offsetY = _default(offsetY, 0);

        c.apply(this.color);
        c.ctx.fillRect(r.x, r.y, r.w, r.h);

        if (this.stroke != null) {
            // Apply this style directly instead of using Canvas.apply so we don't have
            // to call Canvas.restore twice
            this.stroke.apply(c);
            c.ctx.strokeRect(r.x, r.y, r.w, r.h);
        }

        c.restore();
    }
}
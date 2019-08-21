import { Rect } from "../rect";
import { Object2D } from "../object";
import { Color } from "../styles/color";
import { Canvas } from "../../canvas";
import { Stroke } from "../styles/stroke";

export class Rectangle extends Object2D {
    color: Color;
    stroke: Stroke;

    constructor(x: number, y: number, w: number, h: number, color?: Color) {
        super(x, y, w, h);
        this.color = color || Color.WHITE;
        this.rect = new Rect(x, y, w, h);
    }

    _draw(c: Canvas, x: number, y: number) {
        c.apply(this.color);
        c.ctx.fillRect(x, y, this.rect.w, this.rect.h);

        if (this.stroke != null) {
            // Apply this style directly instead of using Canvas.apply so we don't have
            // to call Canvas.restore twice
            this.stroke.apply(c);
            c.ctx.strokeRect(x, y, this.rect.w, this.rect.h);
        }

        c.restore();
    }
}

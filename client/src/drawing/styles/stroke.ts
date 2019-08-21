import { Canvas } from "../../canvas";
import { Color } from "./color";
import { LineStyle } from "./lineStyle";
import { IStyle } from "../../interfaces";

export class Stroke implements IStyle {
    color: Color;
    lineStyle: LineStyle;
    width: number;

    constructor(width: number, color?: Color, lineStyle?: LineStyle) {
        this.color = color || Color.WHITE;
        this.lineStyle = lineStyle;
        this.width = width;
    }

    apply(c: Canvas): void {
        if (this.lineStyle != null) {
            this.lineStyle.apply(c);
        }

        if (this.color != null) {
            c.ctx.strokeStyle = this.color.asRGBA();
        }

        c.ctx.lineWidth = this.width;
    }
}

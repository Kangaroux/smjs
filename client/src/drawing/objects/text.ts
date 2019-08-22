import { Canvas } from "../../canvas";
import { Color } from "../styles/color";
import { Font } from "../styles/font";
import { Object2D } from "../object";

export class Text extends Object2D {
    color: Color;
    font: Font;
    maxWidth: number;
    text: string;

    constructor(text: string, x: number, y: number) {
        super(x, y, 0, 0);

        this.color = Color.BLACK;
        this.font = new Font("12px", "serif");
        this.maxWidth = 0;
        this.text = text;
    }

    _draw(c: Canvas, x: number, y: number) {
        c.apply(this.color, this.font);
        c.ctx.fillText(this.text, this.rect.x + x, this.rect.y + y, (this.maxWidth > 0) ? this.maxWidth : undefined);
        c.restore();
    }
}

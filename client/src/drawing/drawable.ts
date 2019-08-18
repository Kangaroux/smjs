import { Canvas } from "../canvas";

export interface Drawable {
    draw(c: Canvas): void;
}
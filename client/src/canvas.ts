import { Style } from "./types";

/**
 * The 2D surface the game is drawn to
 */
export class Canvas {
    readonly canvas: HTMLCanvasElement;
    readonly ctx: CanvasRenderingContext2D;
    readonly w: number;
    readonly h: number;

    constructor(canvas: HTMLCanvasElement, w: number, h: number) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d", { alpha: false });
        this.w = w;
        this.h = h;
    }

    /**
     * Applies styles to the drawing context
     */
    apply(...props: Style[]) {
        // Push the current style props onto the stack
        this.ctx.save();

        props.forEach((p) => {
            p.apply(this);
        })
    }

    /**
     * Restores the style settings on the drawing context
     */
    restore() {
        this.ctx.restore();
    }
}
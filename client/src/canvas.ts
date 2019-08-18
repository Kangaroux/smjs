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
}
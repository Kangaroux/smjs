class Canvas {
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

const element = <HTMLCanvasElement>document.getElementById("canvas");
const WIDTH = 800;
const HEIGHT = 600;

export default new Canvas(element, WIDTH, HEIGHT);
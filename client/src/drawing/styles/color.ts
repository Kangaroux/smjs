import { clamp, _default, rgbToHex } from "../../util/util";
import { Style } from "../property";
import { Canvas } from "../../canvas";

export class Color implements Style {
    static readonly WHITE = new Color(255, 255, 255);
    static readonly BLACK = new Color(0, 0, 0);
    static readonly RED = new Color(255, 0, 0);
    static readonly GREEN = new Color(0, 255, 0);
    static readonly BLUE = new Color(0, 0, 255);
    static readonly YELLOW = new Color(255, 255, 0);
    static readonly CYAN = new Color(0, 255, 255);
    static readonly MAGENTA = new Color(0, 255, 255);

    private _r: number;
    private _g: number;
    private _b: number;
    private _a: number;

    constructor(r: number, g: number, b: number, a?: number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = _default(a, 0);
    }

    /**
     * Applies the color style to the canvas
     */
    apply(c: Canvas) {
        c.ctx.fillStyle = this.asRGBA();
    }

    /**
     * Returns the color's representation in hex
     */
    asHex(): string {
        return rgbToHex(this.r, this.g, this.b);
    }

    /**
     * Returns the color's representation in rgb()
     */
    asRGB(): string {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

    /**
     * Returns the color's representation in rgba()
     */
    asRGBA(): string {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a / 255})`;
    }

    get r(): number { return this._r; }
    set r(val: number) { this._r = clamp(val, 0, 255); }

    get g(): number { return this._g; }
    set g(val: number) { this._g = clamp(val, 0, 255); }

    get b(): number { return this._b; }
    set b(val: number) { this._b = clamp(val, 0, 255); }

    get a(): number { return this._a; }
    set a(val: number) { this._a = clamp(val, 0, 255); }
}
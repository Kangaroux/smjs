import { ICloneable } from "../interfaces";

export class Point implements ICloneable<Point> {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Adds another point's x and y to this point
     */
    addPoint(p: Point): Point {
        this.x += p.x;
        this.y += p.y;

        return this;
    }

    /**
     * Adds x and y to this point
     */
    add(x: number, y: number): Point {
        this.x += x;
        this.y += y;

        return this;
    }

    /**
     * Returns a copy of this point
     */
    clone(): Point {
        return new Point(this.x, this.y);
    }
}

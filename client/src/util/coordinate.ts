import { Cloneable } from "./cloneable";

export class Point implements Cloneable<Point> {
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
     * Returns a rect at this point with zero width and height
     */
    asRect(): Rect {
        return new Rect(this.x, this.y, 0, 0);
    }

    /**
     * Returns a copy of this point
     */
    clone(): Point {
        return new Point(this.x, this.y);
    }
}

export class Rect extends Point implements Cloneable<Rect> {
    w: number;
    h: number;

    constructor(x: number, y: number, w: number, h: number) {
        super(x, y);
        this.w = w;
        this.h = h;
    }

    x2(): number {
        return this.x + this.w;
    }

    y2(): number {
        return this.y + this.h;
    }

    topLeft(): Point {
        return this;
    }

    topRight(): Point {
        return new Point(this.x2(), this.y);
    }

    bottomLeft(): Point {
        return new Point(this.x, this.y2());
    }

    bottomRight(): Point {
        return new Point(this.x2(), this.y2());
    }

    /**
     * Returns a copy of this rect
     */
    clone(): Rect {
        return new Rect(this.x, this.y, this.w, this.h);
    }
}
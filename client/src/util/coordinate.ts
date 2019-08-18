export class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Returns a new point with the x and y values of p added to this
     */
    addPoint(p: Point): Point {
        return new Point(this.x + p.x, this.y + p.y);
    }

    add(x: number, y: number): Point {
        return new Point(this.x + x, this.y + y);
    }
}

export class Rect extends Point {
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
}
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

import { Canvas } from "./canvas";

///////////////////////////////////////////////////////////
//
//                        Drawing
//
///////////////////////////////////////////////////////////

export interface Drawable {
    draw(c: Canvas, offsetX: number, offsetY: number): void;
}

export interface Style {
    apply(c: Canvas): void;
}

///////////////////////////////////////////////////////////
//
//                        Resources
//
///////////////////////////////////////////////////////////

export type Resource = {
    name: string,
    url: string,
};

///////////////////////////////////////////////////////////
//
//                      Scene Objects
//
///////////////////////////////////////////////////////////

export abstract class Actor implements Drawable, Entity {
    hide: boolean;
    parent: Entity;

    draw(c: Canvas, offsetX: number, offsetY: number): void { }
    update(deltaTime: number): void { }
}

export interface Entity extends Updateable { }

/**
 * Interface for an object that can be updated every frame
 */
export interface Updateable {
    update(deltaTime: number): void;
}

///////////////////////////////////////////////////////////
//
//                        Misc.
//
///////////////////////////////////////////////////////////

export interface Cloneable<T> {
    clone(): T;
}
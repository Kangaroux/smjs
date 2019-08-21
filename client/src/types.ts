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
//                         Events
//
///////////////////////////////////////////////////////////

/**
 * The different types of DOM events that are dispatched
 */
export enum DOMEventType {
    MOUSE_MOVE = 0,
    MOUSE_UP,
    MOUSE_DOWN,
    KEY_UP,
    KEY_DOWN
}

/**
 * An event originating from the DOM
 */
export class DOMEvent {
    e: Event;
    type: DOMEventType;

    constructor(e: Event, type: DOMEventType) {
        this.e = e;
        this.type = type;
    }
}

/**
 * Interface for an object which has listeners that are notified of events
 */
export interface EventDispatcher {
    listeners: EventHandler[];
    notifyDOMEvent(e: DOMEvent): void;
}

/**
 * Interface for an object that handles events (listens to an EventDispatcher)
 */
export interface EventHandler {
    handleDOMEvent(e: DOMEvent): void;
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

export abstract class Actor implements Drawable, LogicalEntity {
    hide: boolean;
    parent: Entity;

    // @ts-ignore
    draw(c: Canvas, offsetX: number, offsetY: number): void { }

    // @ts-ignore
    handleDOMEvent(e: DOMEvent): void { }

    // @ts-ignore
    update(deltaTime: number): void { }
}

export interface Entity extends Updateable { }

export interface LogicalEntity extends Entity, EventHandler { }

/**
 * Interface for an object that can be updated every frame
 */
export interface Updateable {
    update(deltaTime: number): void;
}
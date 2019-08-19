import { EventHandler, DOMEvent } from "../event";
import { Drawable } from "../drawing/object";

/**
 * An actor is the foundation for any entity. Actors can handle user events and can
 * draw to the canvas. The most fundamental actor is invisible and handles no events.
 */
export abstract class Actor implements Drawable, EventHandler {
    abstract handleDOMEvent(e: DOMEvent): boolean;
}
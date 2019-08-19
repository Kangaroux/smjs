import { EventHandler, DOMEvent } from "../event";
import { Drawable, ObjectGroup } from "./object";
import { Canvas } from "../canvas";

export abstract class Component extends ObjectGroup implements EventHandler {
    abstract handleDOMEvent(e: DOMEvent): boolean;
}
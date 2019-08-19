export enum DomEventType {
    MOUSE_MOVE = 0,
    MOUSE_UP,
    MOUSE_DOWN,
    KEY_UP,
    KEY_DOWN
}

export class DOMEvent {
    e: Event;
    type: DomEventType;

    constructor(e: Event, type: DomEventType) {
        this.e = e;
        this.type = type;
    }
}

export interface EventHandler {
    /**
     * Handles a DOM event. Returning false prevents the event from propagating to
     * other handlers
     */
    handleDOMEvent(e: DOMEvent): boolean;
}
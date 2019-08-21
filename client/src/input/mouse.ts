import { Point } from "../drawing/point";
import { ICloneable } from "../interfaces";

export enum MouseButtons {
    LEFT = 0,
    RIGHT,
    MIDDLE,
    BACK,
    FORWARD,
}

export class Mouse implements ICloneable<Mouse> {
    private buttons: Record<number, boolean>;
    private position: Point;

    static convertButtonFromEvent(button: number): MouseButtons {
        switch (button) {
            case 0:
                return MouseButtons.LEFT;
            case 1:
                return MouseButtons.MIDDLE;
            case 2:
                return MouseButtons.RIGHT;
            case 3:
                return MouseButtons.BACK;
            case 4:
                return MouseButtons.FORWARD;
            default:
                throw new Error("Tried to convert unknown button type: " + button);
        }
    }

    public clone(): Mouse {
        const newMouse = new Mouse();
        newMouse.buttons = Object.assign({}, this.buttons);
        newMouse.position = this.position.clone();

        return newMouse;
    }

    public getButton(button: MouseButtons): boolean {
        const val = this.buttons[button];
        return (val === undefined) ? false : val;
    }

    public getPosition(): Point {
        return this.position;
    }

    public setButton(button: MouseButtons, isDown: boolean) {
        this.buttons[button] = isDown;
    }

    public setPosition(p: Point) {
        this.position = p;
    }
}

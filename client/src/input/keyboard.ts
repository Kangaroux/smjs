import { ICloneable } from "../interfaces";

export class Keyboard implements ICloneable<Keyboard> {
    private keys: Record<string, boolean>;

    constructor() {
        this.keys = {};
    }

    public clone(): Keyboard {
        const newKeyboard = new Keyboard();
        newKeyboard.keys = Object.assign({}, this.keys);

        return newKeyboard;
    }

    /**
     * Returns true if the given key is down
     */
    public down(key: string): boolean {
        const val = this.keys[key];
        return (val === undefined) ? false : val;
    }

    /**
     * Sets the key's state as up or down
     */
    public set(key: string, isDown: boolean) {
        this.keys[key] = isDown;
    }
}

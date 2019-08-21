import { ICloneable } from "./interfaces";
import { Keyboard } from "./input/keyboard";
import { Mouse } from "./input/mouse";

export class GameState implements ICloneable<GameState> {
    readonly keyboard: Keyboard;
    readonly mouse: Mouse;

    constructor(keyboard?: Keyboard, mouse?: Mouse) {
        this.keyboard = keyboard || new Keyboard();
        this.mouse = mouse || new Mouse();
    }

    clone(): GameState {
        return new GameState(this.keyboard.clone(), this.mouse.clone());
    }
}

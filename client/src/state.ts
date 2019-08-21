import { Cloneable } from "./util/cloneable";
import { Keyboard, Mouse } from "./input";

export class GameState implements Cloneable<GameState> {
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
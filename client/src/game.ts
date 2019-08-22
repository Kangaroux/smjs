import { Canvas } from "./canvas";
import { GameState } from "./state";
import { Mouse } from "./input/mouse";
import { Point } from "./drawing/point";
import { Scene } from "./scene";
import { TestScene } from "./scenes/test";
import { ResourceList } from "./resources";
import { IResource } from "./resource/resource";

export class Game {
    readonly canvas: Canvas;
    readonly fps: number;
    readonly resc = ResourceList;

    lastFrameUpdate: number;
    prevState: GameState;
    state: GameState;
    scene: Scene;

    eventBuffer: Event[];

    constructor(canvas: Canvas, fps: number) {
        this.canvas = canvas;
        this.eventBuffer = [];
        this.fps = fps;
        this.state = new GameState();
    }

    appendEventBuffer(e: Event) {
        this.eventBuffer.push(e);
    }

    attachEventListeners() {
        this.canvas.canvas.addEventListener("keydown", (e) => this.appendEventBuffer(e));
        this.canvas.canvas.addEventListener("keyup", (e) => this.appendEventBuffer(e));
        this.canvas.canvas.addEventListener("mousedown", (e) => this.appendEventBuffer(e));
        this.canvas.canvas.addEventListener("mouseup", (e) => this.appendEventBuffer(e));
        this.canvas.canvas.addEventListener("mousemove", (e) => this.appendEventBuffer(e));
    }

    handleEvent(e: Event) {
        switch (e.type) {
            case "keydown":
                this.state.keyboard.set((<KeyboardEvent>e).key, true);
                break;
            case "keyup":
                this.state.keyboard.set((<KeyboardEvent>e).key, false);
                break;
            case "mousedown":
                this.state.mouse.setButton(
                    Mouse.convertButtonFromEvent((<MouseEvent>e).button), true);
                break;
            case "mouseup":
                this.state.mouse.setButton(
                    Mouse.convertButtonFromEvent((<MouseEvent>e).button), false);
                break;
            case "mousemove":
                const event = <MouseEvent>e;
                const rect = this.canvas.canvas.getBoundingClientRect();

                // Gets the mouse position in the canvas
                const position = new Point(
                    event.x - rect.left,
                    event.y - rect.top,
                );

                this.state.mouse.setPosition(position);
        }
    }

    preload(): Promise<IResource[]> {
        const promises: Array<Promise<IResource>> = [];

        promises.push(this.resc.images.ArrowUp.load());
        promises.push(this.resc.images.Receptor.load());
        promises.push(this.resc.images.ReceptorGlow.load());

        return Promise.all(promises);
    }

    run() {
        console.log(this.canvas.canvas);
        this.preload().catch(() => {
            console.error("Failed to load assets");
        }).then(() => {
            this.attachEventListeners();

            this.scene = new TestScene(this);
            this.lastFrameUpdate = Date.now();
            setInterval(() => this.update(), 1000.0 / this.fps);
        });
    }

    update() {
        const deltaTime = Date.now() - this.lastFrameUpdate;

        // Save the old state from last frame and clone a copy that we can write to for
        // this frame. The previous state should be used for reading and the current
        // state should be used for writing
        this.prevState = this.state;
        this.state = this.state.clone();

        // Update inputs
        for (const e of this.eventBuffer) {
            this.handleEvent(e);
        }

        this.eventBuffer = [];

        // Update and redraw
        this.canvas.ctx.clearRect(0, 0, this.canvas.w, this.canvas.h);
        this.scene.update(deltaTime);
        this.scene.draw();

        this.lastFrameUpdate = Date.now();
    }
}

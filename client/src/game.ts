import { Canvas } from "./canvas";
import { GameState } from "./state";
import { ImageResource } from "./resource/image";
import { Mouse } from "./input/mouse";
import { Point } from "./drawing/point";
import { Scene } from "./scene";
import { TestScene } from "./scenes/test";
import Resources from "./resources";

export class Game {
    readonly canvas: Canvas;
    readonly fps: number;

    readonly images: Record<string, ImageResource>;

    lastFrameUpdate: number;
    prevState: GameState;
    state: GameState;
    scene: Scene;

    eventBuffer: Event[];

    constructor(canvas: Canvas, fps: number) {
        this.canvas = canvas;
        this.eventBuffer = [];
        this.images = {};
        this.fps = fps;
    }

    appendEventBuffer(e: Event) {
        this.eventBuffer.push(e);
    }

    attachEventListeners() {
        document.body.addEventListener("keydown", this.appendEventBuffer);
        document.body.addEventListener("keyup", this.appendEventBuffer);
        document.body.addEventListener("mousedown", this.appendEventBuffer);
        document.body.addEventListener("mouseup", this.appendEventBuffer);
        document.body.addEventListener("mousemove", this.appendEventBuffer);
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
                const canvasPos = new Point(
                    this.canvas.canvas.clientLeft,
                    this.canvas.canvas.clientTop,
                );

                this.state.mouse.setPosition(canvasPos.add(event.x, event.y));
        }
    }

    preload(): Promise<any> {
        const promises = [];

        // Preload the images
        for (const k of Resources.images) {
            const img = new ImageResource(k.name, k.url);
            promises.push(img.load());

            this.images[img.name] = img;
        }

        return Promise.all(promises);
    }

    run() {
        this.preload().catch(() => {
            console.error("Failed to load assets");
        }).then(() => {
            this.attachEventListeners();

            this.scene = new TestScene(this);
            this.lastFrameUpdate = Date.now();
            setInterval(this.update, 1000.0 / this.fps);
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

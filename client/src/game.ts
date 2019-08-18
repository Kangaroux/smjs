import { Canvas } from "./canvas";
import { Resource, ImgResource, Loadable } from "./resource";
import { TestScene } from "./scenes/test";

const imgResources: Resource[] = [
    { name: "ArrowUp", url: "/img/arrow.png" },
    { name: "Receptor", url: "/img/receptor.png" },
    { name: "ReceptorGlow", url: "/img/receptor_glow.png" },
]

export class Game {
    readonly canvas: Canvas;
    readonly images: Record<string, ImgResource>;
    readonly fps: number;

    constructor(canvas: Canvas, fps: number) {
        this.canvas = canvas;
        this.images = {};
        this.fps = fps;
    }

    run() {
        this.preload().catch(() => {
            console.error("Failed to load assets");
        }).then(() => {
            let scene = new TestScene(this);
            let earlier = Date.now();

            setInterval(() => {
                // Clear and repaint
                this.canvas.ctx.clearRect(0, 0, this.canvas.w, this.canvas.h);
                scene.update(Date.now() - earlier);
                earlier = Date.now();
            }, 1000.0 / this.fps);
        });
    }

    protected preload(): Promise<any> {
        let promises = [];

        // Preload the images
        for (let k of imgResources) {
            let img = new ImgResource(k.name, k.url);
            promises.push(img.load());

            this.images[img.name] = img;
        }

        return Promise.all(promises);
    }
}
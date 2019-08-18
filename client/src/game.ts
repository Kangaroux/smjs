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

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.images = {};
    }

    run() {
        this.preload().catch(() => {
            console.error("Failed to load assets");
        }).then(() => {
            const fps = 5;
            let scene = new TestScene(this);
            let earlier = Date.now();

            setInterval(() => {
                let delta = Date.now() - earlier;

                // Clear and repaint
                this.canvas.ctx.clearRect(0, 0, this.canvas.w, this.canvas.h);
                scene.update(delta);
            }, 1000.0 / fps);
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
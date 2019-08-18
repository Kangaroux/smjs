import { Canvas } from "./canvas";
import { Resource, ImgResource } from "./resource";

const imgResources: Resource[] = [
    { name: "ArrowUp", url: "/img/arrow.png" },
    { name: "Receptor", url: "/img/receptor.png" },
    { name: "ReceptorGlow", url: "/img/receptor_glow.png" },
]

export class Game {
    readonly canvas: Canvas;
    readonly images: ImgResource[];

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.images = [];
    }

    run() {
        this.preload();
    }

    protected preload() {
        // Preload the images
        for (let k of imgResources) {
            let img = new ImgResource(k.name, k.url);
            img.load();

            this.images.push(img);
        }
    }
}
import { IResource } from "./resource";

export class ImageResource implements IResource {
    readonly el: HTMLImageElement;
    readonly name: string;

    constructor(name: string, url: string) {
        this.el = new Image();
        this.el.src = url;
        this.name = name;
    }

    /**
     * Forces the browser to load the image
     */
    load(): Promise<ImageResource> {
        const p = new Promise<ImageResource>((resolve, _) => {
            const el = document.createElement("img");

            el.src = this.el.src;
            el.width = 1;
            el.height = 1;
            el.style.position = "absolute";
            el.style.left = "-9999";
            el.style.opacity = "0";

            const earlier = Date.now();

            document.body.appendChild(el).onload = () => {
                console.debug("[preload] loaded img " + this.name + " in " +
                    (Date.now() - earlier) / 1000 + "sec");
                resolve(this);
            };
            document.body.removeChild(el);
        });

        return p;
    }
}

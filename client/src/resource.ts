/**
 * An image loaded into memory. ImageResource represents the data of the image
 * whereas Image represents an instance of the image
 */
export class ImgResource {
    readonly img: HTMLImageElement;
    readonly name: string;

    constructor(name: string, url: string) {
        this.img = new Image();
        this.img.src = url;
        this.name = name;
    }

    /**
     * Forces the browser to load the image
     */
    load() {
        let el = document.createElement("img");

        el.src = this.img.src;
        el.width = 1;
        el.height = 1;
        el.style.position = "absolute";
        el.style.left = "-9999";
        el.style.opacity = "0";

        document.body.appendChild(el);
        document.body.removeChild(el);
    }
}

export type Resource = {
    name: string,
    url: string,
};
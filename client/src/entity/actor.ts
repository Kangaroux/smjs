import { IDrawable, IEntity } from "../interfaces";

export abstract class Actor implements IDrawable, IEntity {
    hide: boolean;
    parent: IEntity;

    // @ts-ignore
    draw(c: Canvas, offsetX: number, offsetY: number): void { }

    // @ts-ignore
    update(deltaTime: number): void { }
}

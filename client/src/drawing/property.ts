import { Canvas } from "../canvas";

export interface Style {
    apply(c: Canvas): void;
}
import { Canvas } from "./canvas";
import { Game } from "./game";

const WIDTH = 800;
const HEIGHT = 600;
const canvasElem = <HTMLCanvasElement>document.getElementById("canvas");
const canvas = new Canvas(canvasElem, WIDTH, HEIGHT);
const game = new Game(canvas, 60.0);

game.run();

import { Canvas } from "./canvas";
import { Game } from "./game";

const WIDTH = 800;
const HEIGHT = 600;
let canvasElem = <HTMLCanvasElement>document.getElementById("canvas");
let canvas = new Canvas(canvasElem, WIDTH, HEIGHT);
let game = new Game(canvas, 60.0);

game.run();
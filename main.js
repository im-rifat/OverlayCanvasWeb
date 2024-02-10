import { OverlayCanvasManager } from "./overlay_canvas_manager.js";

let canvasDom = document.getElementById("canvas_2d");
let overlay_canvas_manager = new OverlayCanvasManager(canvasDom);

overlay_canvas_manager.addOverlay(120, 120);
overlay_canvas_manager.addOverlay(100, 100);
overlay_canvas_manager.addOverlay(180, 80);
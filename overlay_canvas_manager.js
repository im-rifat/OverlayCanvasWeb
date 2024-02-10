import { Shape } from "./shape.js";
import { OverlayView } from "./overlayview.js";

class OverlayCanvasManager {

    constructor(element) {
        this.overlayList = [];

        this.canvasDom = element;

        this.context = this.canvasDom.getContext("2d");

        this.overlayView = new OverlayView();

        this.width = this.context.canvas.clientWidth;
        this.height = this.context.canvas.clientHeight;

        this.context.fillRect(0, 0, this.width, this.height);

        this.isDrawing = false;

        let onTouchDownReference = this.onTouchDown.bind(this);
        let onTouchUpReference = this.onTouchUp.bind(this);
        let onTouchMoveReference = this.onTouchMove.bind(this);

        document.addEventListener("mousedown", onTouchDownReference, false);
        document.addEventListener("mouseup", onTouchUpReference, false);
        document.addEventListener("mousemove", onTouchMoveReference, false);
    }

    onTouchDown(event) {
        let clientRect = this.canvasDom.getBoundingClientRect();
        let rect = [clientRect["x"], clientRect["y"], clientRect["right"], clientRect["bottom"]];
        //console.log(rect);
        //console.log(event);

        let x = event["clientX"];
        let y = event["clientY"];

        if(x >= rect[0] && x <= rect[2] && y >= rect[1] && y <= rect[3]) {
            this.isDrawing = true;
        }
    }

    onTouchUp(event) {
        this.isDrawing = false;
    }

    onTouchMove(event) {
        if(this.isDrawing) {
            console.log("on touch move");
        }
    }

    addOverlay(width, height) {
        this.overlayList.push(new Shape(width, height));

        this.overlayView.updateShape(this.#getRequiredRect(this.width, this.height, this.overlayList[this.overlayList.length-1]));
        this.overlayView.onDraw(this.context);
    }

    selectElement(index) {
        this.overlayView.onDraw(this.context);
    }

    resize(width, height) {
        this.width = width;
        this.height = height;
    }

    #getRequiredRect(canvasWidth, canvasHeight, shape) {
        let rect = [0, 0, 0, 0];
        rect[0] = shape.centerPoint[0] * canvasWidth - ((shape.width/2)*shape.scale);
        rect[1] = shape.centerPoint[1] * canvasHeight - ((shape.height/2)*shape.scale);
        rect[2] = shape.width*shape.scale;
        rect[3] = shape.height*shape.scale;
        return rect;
    }
}

export {OverlayCanvasManager};
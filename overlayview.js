class OverlayView {

    constructor() {
        this.width = 0;
        this.height = 0;

        this.rect = [];
    }

    requestLayout(newWidth, newHeight) {
        this.onSizeChanged(this.width, this.height, newWidth, newHeight);
    }

    onDraw(context) {
        context.save();

        // draw in here
        context.strokeStyle = "red";
        context.strokeRect(...this.rect);

        context.restore();
    }

    updateShape(rect) {
        this.rect = rect;
    }
}

export {OverlayView};
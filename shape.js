function Shape(width, height) {
    this.scale = 1.0; // normalized
    this.centerPoint = [0.5, 0.5]; // normalized
    this.angle = 0.0;

    this._scale = this.scale;
    this._centerPoint = this.centerPoint;
    this._angle = this.angle;

    this.width = width;
    this.height = height;

    /*this.rect = function(sizeA, sizeB) {
        let rect = [0, 0, 0, 0];
        rect[0] = this.centerPoint[0] * sizeA[0] - ((sizeB[0]/2)*this.scale);
        rect[1] = this.centerPoint[1] * sizeA[1] - ((sizeB[1]/2)*this.scale);
        rect[2] = sizeB[0]*this.scale;
        rect[3] = sizeB[1]*this.scale;
        return rect;
    }*/

    this.saveInternalState = function() {
        this._scale = this.scale;
        this._centerPoint = this.centerPoint;
        this._angle = this.angle;
    }
}

export {Shape};
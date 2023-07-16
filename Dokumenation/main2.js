var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
function getShape() {
    return this.shape;
}
function paintShape(opts) {
    // ...
}
var shape = getShape();
paintShape({ shape: shape });
paintShape({ shape: shape, xPos: 100 });
paintShape({ shape: shape, yPos: 100 });
paintShape({ shape: shape, xPos: 100, yPos: 100 });

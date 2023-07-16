class Shape {
  public haveShape: boolean;

  constructor(haveShape: boolean) {
    this.haveShape = haveShape;
  }

}

function getShape() {
  var shape = new Shape(true);
  return shape;
}

interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOptions) {
  // ...

  
}

const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });

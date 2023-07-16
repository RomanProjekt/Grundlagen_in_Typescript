class Point {
  private coordinates: Array<number>;

  public constructor();
  public constructor(x: number, y: number);
  public constructor(x: number, y: number, z: number);
  public constructor(
    x: number,
    y: number,
    z: number,
    ...coordinates: Array<number>
  );
  public constructor(coordinates: Array<number>);

  public constructor(...args: Array<any>) {
    // gemeinsamer logischer Konstruktor
    if (args.length == 0) throw new Error("Arguments are not defined.");

    let arg = args[0];

    if (Array.isArray(arg)) {
      if (arg.length < 2)
        throw new Error("Minimum number of dimmensions is 2.");

      this.coordinates = arg;
    } else this.coordinates = args;
  }

  public getCoordinate(dimmension: number): number {
    return this.coordinates[dimmension];
  }

  public toString(): string {
    let result = "{";

    if (this.coordinates.length > 0) {
      result += " " + this.coordinates[0];

      for (let i = 1; i < this.coordinates.length; ++i)
        result += ", " + this.coordinates[i];
    }

    return result + " }";
  }
}

let a = new Point(1, 2);
let b = new Point(1, 2, 3);
let c = new Point(1, 2, 3, 4);
let d = new Point([1, 2]);
let e = new Point([1, 2, 3]);
let f = new Point([1, 2, 3, 4]);

console.log(a.toString());
console.log(b.toString());
console.log(c.toString());
console.log(d.toString());
console.log(e.toString());
console.log(f.toString());

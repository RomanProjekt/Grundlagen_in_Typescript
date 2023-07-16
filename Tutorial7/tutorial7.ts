//TypeScript Tutorial #7 - Vererbung
class Tier {
  laufen(): void {
    console.log("own");
  }
}

class Hund extends Tier {
  beine: number = 4;
  bellen(): void {
    console.log("wuff");
  }
}

class Dalmadiner extends Hund {
  bellen(): void {
    console.log("Macht was anderes!");
  }
}

class Schaeferhund extends Hund {}

let rex: Dalmadiner = new Dalmadiner();
rex.bellen();
console.log(rex.beine);

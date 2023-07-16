//TypeScript Tutorial #9 - Interfaces

interface ITier {
  laufen(): void;
  bellen(): void;
}

class Tier implements ITier {
  laufen(): void {
    console.log("own");
  }

  bellen(): void {
    console.log("Ich belle wie ein Tier!");
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
  laufen(): void {
    console.log("runnign fast!");
  }
}

class Schaeferhund extends Hund {}

let rex: Dalmadiner = new Dalmadiner();
rex.bellen();
console.log(rex.beine);

rex.laufen();

let paulaner: Dalmadiner = new Hund();
paulaner.laufen();

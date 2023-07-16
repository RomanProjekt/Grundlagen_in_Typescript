//TypeScript Tutorial #11 - Zugriffsmodifikatoren
//TypeScript Tutorial #11 - Zugriffsmodifikatoren

class Hund {
  beine: number = 4;

  private laufen(): void {
    console.log("omw");
  }

  bellen(): void {
    this.laufen();
  }

  protected foo() {
    console.log("foo");
  }
}

class Dalmadiner extends Hund {
  public foo(): void {
    //this.laufen(); //Fehler bei private laufen();
  }
}

let rex: Dalmadiner = new Dalmadiner();
//rex.laufen(); //Fehler wenn private laufen();

rex.foo();

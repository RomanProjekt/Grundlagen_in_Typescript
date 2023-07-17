//TypeScript Tutorial #15 - Mehrere Generics

enum Richtung {
  Rechts,
  Links,
  Nachvorne,
  Nachhinten,
}

class Container1<T> {
  public element: T[];
}

class Hunde_Container2<T extends Hund2, X, Y, Z extends Richtung> {
  public elements: T[];

  public bellenInContainer(index: number): void {
    this.elements[index].bellen();
  }
}

class Hund2 {
  private beine: number = 4;

  public getBeine(): number {
    return this.beine;
  }

  public setBeine(beine: number) {
    if (beine < 0) {
      console.log("Fehler!");
    } else {
      this.beine = beine;
    }
  }

  protected laufen(): void {
    console.log("omw");
  }

  bellen(): void {
    console.log("omw");
  }
}

//Durch die genaueren Zuweisung der Typen "numbrer" kann man jetzt jewueiligen Funkionalitäten
//von dem Array mit dem Punktoperator zugreifen -> z.B.: push(1) -> Zahl in mein Array geben.
//var myContainer: Container<number> = new Container<number>();
//myContainer.element.

//Container 2 erbt von Hund
var rexKlasse: Hund2 = new Hund2();
var containerH2: Hunde_Container2<Hund2, number, number, Richtung> =
  new Hunde_Container2<Hund2, number, number, Richtung>();
containerH2.elements = [rexKlasse];
containerH2.bellenInContainer(0);

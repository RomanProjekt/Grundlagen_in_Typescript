//TypeScript Tutorial #14 - Generische Klassen und Constraints

class Container<T> {
  public element: T[];
}

class Hunde_Container<T extends Hund> {
  public elements: T[];

  public bellenInContainer(index: number): void {
    this.elements[index].bellen();
  }
}

class Hund {
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
var myContainer: Container<number> = new Container<number>();
//myContainer.element

//Container 2 erbt von Hund
var rex: Hund = new Hund();
var containerH: Hunde_Container<Hund> = new Hunde_Container<Hund>();
containerH.elements = [rex];
containerH.bellenInContainer(0);

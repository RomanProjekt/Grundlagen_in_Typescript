export const pi = 3.14;
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
    this.bellen();
  }
}

export { Hund as meineHundKlasse };

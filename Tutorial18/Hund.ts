export const pi = 3.14;
export class Hund {
  private beine: number = 4;

  public getBeine(): number {
    return this.beine;
  }

  protected setBeine(beine: number) {
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

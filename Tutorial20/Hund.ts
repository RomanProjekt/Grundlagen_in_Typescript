//TypeScript Tutorial #20 - Default Exports
export const pi = 3.14;

export default class Hund {
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
    console.log("Gibt eine Ton zurück!");
  }
}

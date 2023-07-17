//TypeScript Tutorial #6 - Methoden und Konstruktoren

class Wohnungen {
  private zimmer: number;
  private groesse: number;
  private balkon: boolean;

  constructor(zimmer: number, groesse: number, balkon: boolean) {
    this.zimmer = zimmer;
    this.groesse = groesse;
    this.balkon = balkon;
  }

  public get Zimmer(): number {
    return this.zimmer;
  }

  public set Zimmer(value: number) {
    this.zimmer = value;
  }

  public get Groesse(): number {
    return this.groesse;
  }
  public set Groesse(value: number) {
    this.groesse = value;
  }

  public get Balkon(): boolean {
    return this.balkon;
  }
  public set Balkon(value: boolean) {
    this.balkon = value;
  }
}

let meineWohnung: Wohnungen = new Wohnungen(12, 1000, false);
meineWohnung.Zimmer = 12;
meineWohnung.Groesse = 1000;
meineWohnung.Balkon = true;

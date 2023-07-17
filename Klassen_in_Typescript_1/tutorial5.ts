//----------------------------------------------------------
//TypeScript Tutorial #5 - Klassen für JavaScript

class Wohnung {
  private zimmer: number;
  private groesse: number;

  public constructor();
  public constructor(zimmer: number, groesse: number, balkon: boolean);
  public constructor(zimmer: number, groesse: number);

  public constructor(zimmer?: number, groesse?: number, balkon?: boolean) {
    this.zimmer = zimmer ?? 0;
    this.groesse = groesse ?? 0;
    this.balkon = balkon ?? false;
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
  private balkon: boolean;
  public get Balkon(): boolean {
    return this.balkon;
  }
  public set Balkon(value: boolean) {
    this.balkon = value;
  }
}

let wohnung: Wohnung = new Wohnung();

console.log(wohnung.Zimmer);
console.log(wohnung.Groesse);
console.log(wohnung.Balkon);

let wohnung2: Wohnung = new Wohnung();
console.log(wohnung2.Balkon);
console.log(wohnung2.Groesse);
console.log(wohnung2.Zimmer);

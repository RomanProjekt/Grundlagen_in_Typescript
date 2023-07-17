//TypeScript Tutorial #15 - Mehrere Generics
var Richtung;
(function (Richtung) {
    Richtung[Richtung["Rechts"] = 0] = "Rechts";
    Richtung[Richtung["Links"] = 1] = "Links";
    Richtung[Richtung["Nachvorne"] = 2] = "Nachvorne";
    Richtung[Richtung["Nachhinten"] = 3] = "Nachhinten";
})(Richtung || (Richtung = {}));
var Container1 = /** @class */ (function () {
    function Container1() {
    }
    return Container1;
}());
var Hunde_Container2 = /** @class */ (function () {
    function Hunde_Container2() {
    }
    Hunde_Container2.prototype.bellenInContainer = function (index) {
        this.elements[index].bellen();
    };
    return Hunde_Container2;
}());
var Hund2 = /** @class */ (function () {
    function Hund2() {
        this.beine = 4;
    }
    Hund2.prototype.getBeine = function () {
        return this.beine;
    };
    Hund2.prototype.setBeine = function (beine) {
        if (beine < 0) {
            console.log("Fehler!");
        }
        else {
            this.beine = beine;
        }
    };
    Hund2.prototype.laufen = function () {
        console.log("omw");
    };
    Hund2.prototype.bellen = function () {
        console.log("omw");
    };
    return Hund2;
}());
//Durch die genaueren Zuweisung der Typen "numbrer" kann man jetzt jewueiligen Funkionalitäten
//von dem Array mit dem Punktoperator zugreifen -> z.B.: push(1) -> Zahl in mein Array geben.
//var myContainer: Container<number> = new Container<number>();
//myContainer.element
//Container 2 erbt von Hund
var rexKlasse = new Hund2();
var containerH2 = new Hunde_Container2();
containerH2.elements = [rexKlasse];
containerH2.bellenInContainer(0);

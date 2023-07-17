//TypeScript Tutorial #14 - Generische Klassen und Constraints
var Container = /** @class */ (function () {
    function Container() {
    }
    return Container;
}());
var Hunde_Container = /** @class */ (function () {
    function Hunde_Container() {
    }
    Hunde_Container.prototype.bellenInContainer = function (index) {
        this.elements[index].bellen();
    };
    return Hunde_Container;
}());
var Hund = /** @class */ (function () {
    function Hund() {
        this.beine = 4;
    }
    Hund.prototype.getBeine = function () {
        return this.beine;
    };
    Hund.prototype.setBeine = function (beine) {
        if (beine < 0) {
            console.log("Fehler!");
        }
        else {
            this.beine = beine;
        }
    };
    Hund.prototype.laufen = function () {
        console.log("omw");
    };
    Hund.prototype.bellen = function () {
        console.log("omw");
    };
    return Hund;
}());
//Durch die genaueren Zuweisung der Typen "numbrer" kann man jetzt jewueiligen Funkionalitäten
//von dem Array mit dem Punktoperator zugreifen -> z.B.: push(1) -> Zahl in mein Array geben.
var myContainer = new Container();
//myContainer.element
//Container 2 erbt von Hund
var rex = new Hund();
var containerH = new Hunde_Container();
containerH.elements = [rex];
containerH.bellenInContainer(0);

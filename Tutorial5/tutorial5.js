//----------------------------------------------------------
//TypeScript Tutorial #5 - Klassen für JavaScript
var Wohnung = /** @class */ (function () {
    function Wohnung(zimmer, groesse, balkon) {
        this.zimmer = zimmer !== null && zimmer !== void 0 ? zimmer : 0;
        this.groesse = groesse !== null && groesse !== void 0 ? groesse : 0;
        this.balkon = balkon !== null && balkon !== void 0 ? balkon : false;
    }
    Object.defineProperty(Wohnung.prototype, "Zimmer", {
        get: function () {
            return this.zimmer;
        },
        set: function (value) {
            this.zimmer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wohnung.prototype, "Groesse", {
        get: function () {
            return this.groesse;
        },
        set: function (value) {
            this.groesse = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wohnung.prototype, "Balkon", {
        get: function () {
            return this.balkon;
        },
        set: function (value) {
            this.balkon = value;
        },
        enumerable: false,
        configurable: true
    });
    return Wohnung;
}());
var wohnung = new Wohnung();
console.log(wohnung.Zimmer);
console.log(wohnung.Groesse);
console.log(wohnung.Balkon);
var wohnung2 = new Wohnung();
console.log(wohnung2.Balkon);
console.log(wohnung2.Groesse);
console.log(wohnung2.Zimmer);

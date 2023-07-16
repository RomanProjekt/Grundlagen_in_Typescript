//TypeScript Tutorial #12 - Enums
var Richtung;
(function (Richtung) {
    Richtung[Richtung["RECHTS"] = 1] = "RECHTS";
    Richtung[Richtung["LINKS"] = 2] = "LINKS";
    Richtung[Richtung["OBEN"] = 3] = "OBEN";
    Richtung[Richtung["UNTEN"] = 4] = "UNTEN";
})(Richtung || (Richtung = {}));
console.log(Richtung.RECHTS);
console.log(Richtung.LINKS);
console.log(Richtung.OBEN);
console.log(Richtung.UNTEN);
//Ausgabe 0,1,2,3

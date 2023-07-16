"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pi = void 0;
//TypeScript Tutorial #20 - Default Exports
exports.pi = 3.14;
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
        console.log("Gibt eine Ton zurück!");
    };
    return Hund;
}());
exports.default = Hund;

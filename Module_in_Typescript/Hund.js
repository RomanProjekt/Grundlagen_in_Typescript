"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hund = exports.pi = void 0;
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
        this.bellen();
    };
    return Hund;
}());
exports.Hund = Hund;

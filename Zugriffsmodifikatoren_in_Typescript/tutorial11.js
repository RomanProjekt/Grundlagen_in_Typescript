//TypeScript Tutorial #11 - Zugriffsmodifikatoren
//TypeScript Tutorial #11 - Zugriffsmodifikatoren
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hund = /** @class */ (function () {
    function Hund() {
        this.beine = 4;
    }
    Hund.prototype.laufen = function () {
        console.log("omw");
    };
    Hund.prototype.bellen = function () {
        this.laufen();
    };
    Hund.prototype.foo = function () {
        console.log("foo");
    };
    return Hund;
}());
var Dalmadiner = /** @class */ (function (_super) {
    __extends(Dalmadiner, _super);
    function Dalmadiner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dalmadiner.prototype.foo = function () {
        //this.laufen(); //Fehler bei private laufen();
    };
    return Dalmadiner;
}(Hund));
var rex = new Dalmadiner();
//rex.laufen(); //Fehler wenn private laufen();
rex.foo();

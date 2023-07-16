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
//TypeScript Tutorial #7 - Vererbung
var Tier = /** @class */ (function () {
    function Tier() {
    }
    return Tier;
}());
var Hund = /** @class */ (function (_super) {
    __extends(Hund, _super);
    function Hund() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.beine = 4;
        return _this;
    }
    Hund.prototype.bellen = function () {
        console.log("wuff");
    };
    return Hund;
}(Tier));
var Dalmadiner = /** @class */ (function (_super) {
    __extends(Dalmadiner, _super);
    function Dalmadiner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dalmadiner.prototype.bellen = function () {
        console.log("Macht was anderes!");
    };
    return Dalmadiner;
}(Hund));
var rex = new Dalmadiner();
rex.bellen();
console.log(rex.beine);

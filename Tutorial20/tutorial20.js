"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hund_1 = require("./Hund");
//TypeScript Tutorial #20 - Default Exports
//1. Beim Import muss man die runden Klammern weg {}
//2. in der Jeweiligen Klasse z.B.: Hund.ts ->  muss dann export default Hund {...}
var hund = new Hund_1.default();
hund.bellen();

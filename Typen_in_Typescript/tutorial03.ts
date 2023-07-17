//TypeScript Tutorial Deutsch #3 - Typen

var msg2: string = "Hello World!";
console.log(msg2);
var wert1: Number = 12;
var wert2: Boolean = false;
var wert3: boolean = true;

//let wert5: Boolean = null;  //Error

let zahl1: number = 12;
console.log(zahl1);

//Remember that when the strictNullChecks flag is set to true in tsconfig.json
let varialbe1: null = null; // Ok
//let b: undefined = null; // Error
//let c: number = null; // Error
//let d: void = null; // Error

//let foo: bigint = BigInt(100);
//let bar: bigint = 100n;
//console.log(bar);

//let symbol2 = Symbol("key");
//let symbol3 = Symbol("key");

let liste1: number[] = [1, 12, 93, 5];

//-----------------------------------------

function vergleichen2(): void {
  let x: number = 2;
}

function ausgeben2(): void {}

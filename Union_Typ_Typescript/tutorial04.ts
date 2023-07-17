let neu: number[] = [12, 12, 12, 12, 12, 12, 12, 12, 12, 12];
let stringArray: string[] = ["H", "E", "H", "H", "H", "H"];

for (let i: number = 0; i < stringArray.length; i++) {
  console.log(i);
}

console.log(typeof neu);

//----------------------------------------------------------

let unionVar: number | string;

unionVar = 1;
console.log(unionVar);
unionVar = "Hello World!";
console.log(unionVar);

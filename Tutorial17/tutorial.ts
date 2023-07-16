let myArray = [43, true, "Hello Worldi!"];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

//-----------------------------------------

for (let i of myArray) {
  console.log(i);
}

//-------------------------------------------

for (let i in myArray) {
  console.log(myArray[i]);
}

for (let i in myArray) {
  console.log(i);
}

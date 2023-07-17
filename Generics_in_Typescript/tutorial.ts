//TypeScript Tutorial #13 - Generics

function showID(param: number): number {
  return param;
}

function showName(param: any): void {
  return console.log(param);
}

showName("Name");

function showLastname<T>(param: T): T {
  return param;
}

showLastname("Lastname");
showName("Test Name");

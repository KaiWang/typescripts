class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnyThing<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

export function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

interface Printable {
  print(): void;
}

class Car implements Printable {
  print() {
    console.log('I am a Car');
  }
}

class House implements Printable {
  print() {
    console.log('I am a house');
  }
}

function printHousseOrCar<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[0].print();
  }
}

printHousseOrCar<Printable>([new Car(), new House()]);

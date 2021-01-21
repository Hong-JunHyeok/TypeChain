interface Person {
  name: string;
  age: number;
  gender: string;
}

//or

type Human = {
  name: string;
  age: number;
  gender: string;
};

//or expressing js

class Human_2 {
  name: string;
  age: number;
  gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const sechan: Person = {
  name: 'sechan',
  age: 18,
  gender: 'male',
};
const minsu: Human = {
  name: 'minsu',
  age: 18,
  gender: 'male',
};
const hong = new Human_2('hong', 18, 'male'); //use Class

const sayHi = (object: Person): string => {
  return `Hello ${object.name} , ${object.age}years old, ${object.gender}`;
};

console.log(sayHi(sechan));
console.log(sayHi(minsu));
console.log(sayHi(hong));

export {};

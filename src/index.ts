const name = 'hong',
  age = 10,
  gender = 'male';
const sayHi = (name: string, age: number, gender?: string): void => {
  console.log(`Hello ${name} , ${age}years old, ${gender}`);
};

sayHi(name, age, gender);

export {};

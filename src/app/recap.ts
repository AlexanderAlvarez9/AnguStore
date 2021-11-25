let username: string = 'Alexander';

const sum = (a: number, b: number): number => a + b;

sum(1, 2);

class Person {
  constructor(public age: number, public name: string) {}
}

const Alex = new Person(25, 'Alexander');

import Person from './person';
import Test from './test';

const person = new Person('Tom',17);
const name = person.getName();
console.log(name);

const test = new Test();
test.test();
test.test1();


function Person(firstName, lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

Person.prototype.getBirthYear = function () {
    return this.dob.getUTCFullYear();
}

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1987');

console.log(person1);
console.log(person1.getBirthYear())
console.log(person2.getFullName())

class App {
    constructor() {
        this.name = 'Tom';
        this.age = 17
    }

    getName=()=>{
        return `His name is ${this.name} ${this.age}`;
    }
}

const app = new App();
console.log(app.getName())

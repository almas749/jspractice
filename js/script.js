'use strict';

const person = {
    name: 'Alex',
    age: 25,

    get PersonAge() {
        return this.age;
    },

    set PersonAge(num) {
        this.age = num;
    }
};

console.log(person.PersonAge = 30);
console.log(person.PersonAge);



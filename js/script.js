'use strict';

let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('salam');
    }
};

const john = Object.create(soldier);

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

john.sayHello();

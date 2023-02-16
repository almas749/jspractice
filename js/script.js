'use strict';

// Задачи:

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.

const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const aaa = [];

function showFamily(arr) {
    if (arr.length !== 0) {
        return `Семья состоит из: ${arr.join(' ')}`;
    } else return 'Семья пуста';
}

console.log(showFamily(aaa));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let value of arr) {
        console.log(value.toLowerCase());
    }
}

standardizeStrings(favoriteCities);


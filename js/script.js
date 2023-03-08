'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите ваше число');

// const reg = /\d/ig;
// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));

// \D not digits
// \W not words

// \d digits
// \w words
// \s spaces

// i найти вне зависимости регистра
// g найти несколько вхождений
// m включает многострочный режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));



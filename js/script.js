'use strict';

// filter

// const names = ['Alesha', 'Biba', 'Maksat', 'Shynauyk', 'Ibrahimovic'];

// const shortNames = names.filter((name) => {
//     return name.length <= 6;
// });

// console.log(shortNames);


// map

// const answers = ['TOnY', 'GRiSHA', 'SalaM'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);


// every/some

// const samu = [4, 'awaw', 'ooff'];

// console.log(samu.some(item => typeof(item) === 'number'));

// console.log(samu.every(item => typeof(item) === 'number'));


// reduce

// const arr = [4, 5, 1, 3, 6, 2];

//                         // 0      4
//                         // 4      5
//                         // 9      1
//                         // 10     3
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

const arr = ['almurt', 'alma', 'banan'];

                        // 0      4
                        // 4      5
                        // 9      1
                        // 10     3
const res = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(res);

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj) //превращает объект в массив массивов
.filter(item => item[1] === 'person')
.map(item => item[0]); 

console.log(newArr);
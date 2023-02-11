'use strict';

// *
// **
// ***
// ****
// *****
// ******
// let star = '';

// for (let i = 1; i < 7; i++) {
//     console.log(star);
//     for (let j = 1; j < 7; j++) {
//         star +='*';
//         break;
//     }
// }

// for (let i = 1; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//         star +='*';
//     }
//     star += '\n';
// }

// console.log(star);


//first - метка
// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k == 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// 1 При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой 


// 2 При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл


// 3 При помощи цикла for выведите чётные числа от 2 до 10 включительно


// 4 Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
//  Цикл, который нужно переписать:
 
//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }


// 5 Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i <=10; i++) {
        console.log(i);
    }
    
}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i >=10; i--) {
        if(i === 13) break;
        console.log(i);
    }
    
}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 2; i <= 10; i++) {
        if(i % 2 === 0) console.log(i);
    }
    
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let i = 1;
    while (i < 16) {
        i++;
        if (i % 2 === 0) {
            continue;
        }
        console.log(i);
    }
    
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 0; i < 6; i++) {
        arrayOfNumbers[i] = i + 5;
    }
    
    
    // Не трогаем
    return arrayOfNumbers;
}
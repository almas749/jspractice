'use strict';

// Задачи:

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const minute = minutes % 60;
    if (minutes !== parseInt(minutes) || minutes < 0 || minutes > 600) {
        return ('Ошибка, проверьте данные');
    } else if (hours === 1) {
        return (`Это ${hours} час и ${minute} минут`);
    } else if (hours === 2 || hours === 3 || hours === 4) {
        return (`Это ${hours} часа и ${minute} минут`);
    } else {
        return (`Это ${hours} часов и ${minute} минут`);
    }
}



// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

function findMaxNumber(a, b, c, d) {
    const numbers = [a, b, c, d];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== parseFloat(numbers[i]) || numbers[i] === null || isNaN(numbers[i]) || numbers[i] === undefined) {
            return 0;
        }
    }
    return Math.max(a, b, c, d);
}

console.log(findMaxNumber(17, 15, 13, 56));
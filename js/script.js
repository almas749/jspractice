'use strict';

let a = 5,
    b = a;

b = b + 5;

console.log(b); //10
console.log(a); //5

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; //кладется ссылка на существующуй объект

// copy.a = 10;

// console.log(copy); //{ a: 10, b: 1 }
// console.log(obj);  //{ a: 10, b: 1 }

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.a.x = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c', 'd'];
const newArray = oldArray.slice();

newArray[1] = 'alesha';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; //... spread operator выворачивает массив

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [5, 6, 7];

log(...num);

const array = ["a", "b"];

const newArrray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

// У вас есть готовый объект с данными. Разработчик Х хочет написать часть функционала, но ему не хватает навыков. Выполните часть заданий за него.

// Задачи:

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

// P.S. Дальше по курсу мы научимся удобно обращаться из метода к самому объекту, в котором он расположен. Но пока делаем это менее удобным способом)

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function showAgeAndLangs(plan) {
        let {age} = plan;
        let {skills: {languages}} = plan;
        return `Мне ${age} и я владею языками: ${languages.join(' ').toUpperCase()}`;
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    let {skills: {exp}} = plan;
    return exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let result = '';
    for (let key in plan) {
        for(let i in plan[key]) {
            let {skills: {programmingLangs}} = plan;
            if (plan[key][i] === programmingLangs) {
                for(let j in plan[key][i]) { 
                    result += (`Язык ${j} изучен на ${plan[key][i][j]}\n`);
                }
            }
        }
    }
    return result;
}

console.log(showProgrammingLangs(personalPlanPeter));



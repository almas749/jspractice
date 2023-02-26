'use strict';

const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0)); показывает класс кнопки 0 - первый класс, 1 - второй класс и т.д.
// console.log(btns[0].classList.add('black'));
// console.log(btns[0].classList.remove('black'));
// console.log(btns[0].classList.toggle('black'));

// if (btns[2].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if(!btns[0].classList.contains('red')) {
    //     btns[0].classList.add('red');
    // } else {
    //     btns[0].classList.remove('red');
    // }
    btns[0].classList.toggle('red');
});
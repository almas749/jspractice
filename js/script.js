'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.matches('button.red')) {
        console.log('hello');
    }
});


btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('red');
    });
});
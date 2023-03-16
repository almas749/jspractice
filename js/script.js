'use strict';

const box = document.querySelector('.box');
let pos = 0;

function myAnimation() {
    pos++;
    box.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    } 
}

box.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);
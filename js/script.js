'use strict';

const box = document.querySelector('.box'),
      circles = document.querySelectorAll('.circle');
let pos = 0;

let circlesAnimation;
circles[0].addEventListener('click', () => {
    if(!circlesAnimation) {
        circlesAnimation = circles[0].animate([
            {transform: 'translateX(0)',
            filter: 'opacity(100%)'},
            {transform: 'translateX(200px)',
            filter: 'opacity(50%)'},
            {transform: 'translateX(100px)',
            filter: 'opacity(75%)'},
            {transform: 'translateX(0)',
            filter: 'opacity(100%)'}
        ], {
            duration: 3000,
            iterations: Infinity 
        });
    } else if (circlesAnimation.playState === 'paused') {
        circlesAnimation.play();
    } else {
        circlesAnimation.pause();
    }
}) 

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
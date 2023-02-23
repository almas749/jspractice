'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.touches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    })
    
});

// touches пальцы которые взаимодействуют с браузером
// targetTouches пальцы которые взаимодействуют с конкретным элементом
// changedTouches список пальцев которые участвуют в текущем событий 
'use strict';
// 1) Первую часть задания повторить по уроку

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const watchedMovie = prompt('Один из последних просмотренных фильмов?', ''),
              rateMovie = prompt('На сколько оцените его?', '');
    
        if(watchedMovie != null && rateMovie != null && watchedMovie != '' && rateMovie != '' && watchedMovie.length < 50){
            personalMovieDB.movies[watchedMovie] = rateMovie;
            console.log('done!');
        } else {
            console.log('error!');
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();


// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

function showMyDB() {
    let privat = personalMovieDB.privat;
    if (privat == false) {
        console.log(personalMovieDB);
    } 
}

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {     
        let favoriteGenre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        personalMovieDB.genres[i] = favoriteGenre;
    }
}

writeYourGenres();

showMyDB();
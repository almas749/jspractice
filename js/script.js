//First Task

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', ''); 
const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [

    ],
    privat: false
};

const watchedMovieFirst = prompt('Один из последних просмотренных фильмов?', ''),
      rateMovieFirst = prompt('На сколько оцените его?', ''), 
      watchedMovieSecond = prompt('Один из последних просмотренных фильмов?', ''),
      rateMovieSecond = prompt('На сколько оцените его?', '');

personalMovieDB.movies[watchedMovieFirst] = rateMovieFirst;
personalMovieDB.movies[watchedMovieSecond] = rateMovieSecond;

console.log(personalMovieDB);
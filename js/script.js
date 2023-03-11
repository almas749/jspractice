'use strict';

const user = (function() {
    const privat = function() {
        console.log('i am private');
    };

    return {
        say: privat
    };
}());

user.say();



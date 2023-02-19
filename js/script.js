'use strict';

let z = 5; alert(z++); //5
alert (++z); //6

// [ ] + false - null + true 
console.log([] + false); //'false'
console.log(typeof([] + false)); //string
console.log([] + false - null); //NaN
console.log([] + false - null + true); //NaN

let y = 1; 
let x = y = 2; 
alert(x); //2

// [ ] + 1 + 2
console.log([] + 1 + 2); //12

alert( "1"[0] ); //1

consoele.log(2 && 1 && null && 0 && undefined); //null И запинается на лжи 

console.log(!!( 1 && 2 ) === (1 && 2)); //false

                  //3
alert( null || 2 && 3 || 4 ); //3
// 2 && 3 -- 3
// null || 3 -- 3
// 3 || 4 -- 3  //Или запинается на правде

const a = [1, 2, 3], b = [1, 2, 3]; 
console.log(a === b); //false

console.log( +"Infinity" ); //Infinity

console.log("Ёжик" > "яблоко"); //false

console.log(0 || "" || 2 || undefined || true || falsе); // 2
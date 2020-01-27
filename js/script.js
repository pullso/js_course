'use strict';

// let ans = prompt('Введите ваше имя');
// let reg = /n/gi;
//console.log(ans.search(reg));
// console.log(ans.match(reg));
//console.log(reg.test(ans));

//i - регистр
//g - глобальность
//m - многострочность

// \d
// \w
// \s
// let pass = prompt('Введите пароль:', '');
// console.log(pass.replace(/./g, '*'));
// alert('12-34-56'.replace(/-/g, ':'));

// let ans = prompt('Введите число');
// let reg = /\d/gi;
// console.log(ans.match(reg));

// let str = 'My name is R2D2';
// console.log(str.match(/\w\d\w\d/i));

// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

function sayHello() {
	console.log('hello world');
}

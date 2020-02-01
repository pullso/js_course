// 'use strict';

// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}
// 	console.log(sum());
// }

// showThis(4, 5);
// showThis(5, 5);

// let obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		console.log(this);
// 	},
// };

// // obj.sum();

// let user = {
// 	name: 'John',
// };

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));

// function count(number) {
// 	return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));

// let age = document.getElementById('age');
// function showUser(surname, name) {
// 	alert('Пользователь ' + surname + ' ' + name + ', его возраст ' + age.value);
// }
// showUser('Иванов', 'Петр');

// 'use strict';

// function hello() {
// 	console.log(this);
// }

// hello();

// let name = 'ivan',
// 	age = 30,
// 	mail = 'ex@mail.ru';

// document.write(`'Пользователю ${name} ${age} лет. Его почтовый адрес  ${mail}`);

// function makeArray() {
// 	var items = [];
// 	for (let i = 0; i < 10; i++) {
// 		var item = function() {
// 			console.log(i);
// 		};
// 		items.push(item);
// 	}

// 	return items;
// }

// var arr = makeArray();

// arr[1]();
// arr[3]();
// arr[7]();

// let fun = () => {
// 	console.log(this);
// };

// // fun();

// let obj = {
// 	number: 4,
// 	sayNumber: function() {
// 		let say = () => {
// 			console.log(this);
// 		};
// 		say();
// 	},
// };

// obj.sayNumber();

// function calcOrDouble(number, basis = 2) {
// 	//basis = basis || 2; ES 5
// 	console.log(number * basis);
// }

// calcOrDouble(3, 5);
// calcOrDouble(6);

// class Rectangle {
// 	constructor(height, width = 20) {
// 		this.height = height;
// 		this.width = width;
// 	}
// 	calcArea() {
// 		return this.height * this.width;
// 	}
// }
// const square = new Rectangle(10);

// console.log(square.calcArea());

// let video = ['youtube', 'vimeo', 'rutube'],
// 	blogs = ['wordpress', 'livejournal', 'blogger'],
// 	internet = [...video, ...blogs, 'vk'];

// console.log(internet);

// function log(a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// 	console.log(a + b + c);
// }

// let numbers = [2, 5, 7];

// log(...numbers);

// let options = {
// 	width: 1366,
// 	height: 768,
// 	background: 'red',
// 	font: {
// 		size: '16px',
// 		color: '#fff',
// 	},
// };

// console.log(JSON.parse(JSON.stringify(options)));

// let inputRub = document.getElementById('rub'),
// 	inputUsd = document.getElementById('usd');

// inputRub.addEventListener('input', () => {
// 	let request = new XMLHttpRequest();

// request.open(method, url, async, login, pass);

// request.open('GET', 'js/current.json');
// request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// request.send();

//status
//statusText
//responseText / response
//readyState

// 	request.addEventListener('readystatechange', function() {
// 		if (request.readyState === 4 && request.status == 200) {
// 			let data = JSON.parse(request.response);
// 			inputUsd.value = inputRub.value / data.usd;
// 		} else {
// 			inputUsd.value = 'Что-то пошло не так';
// 		}
// 	});
// });
// let drink = 0;

// function shoot(arrow) {
// 	console.log('Вы сделали выстрел');
// 	let promise = new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			Math.random() > 0.5 ? resolve({}) : reject('Вы промахнулись');
// 		}, 3000);
// 	});
// 	return promise;
// }

// function win() {
// 	console.log('Вы победили');
// 	drink == 1 ? byBeer() : giveMoney();
// }

// function byBeer() {
// 	console.log('Вам купили пиво');
// }

// function giveMoney() {
// 	console.log('Вам дали денег');
// }

// function loose() {
// 	console.log('Вы проиграли');
// }

// shoot({})
// 	.then(mark => console.log('Вы попали в цель'))
// 	.then(win)
// 	.catch(loose);

// localStorage.setItem('number', 1);
// console.log(localStorage.getItem('number'));
// localStorage.removeItem('number');
// localStorage.clear();

// try {
// 	console.log('Normal');
// 	console.log(a);
// } catch (error) {
// 	console.log(`Мы получили ошибку  ${error.name}`);
// }
// console.log('А я буду работать дальше');

function myModule() {
	this.hello = function() {
		return 'Hello!';
	};
	this.goodbye = function() {
		return 'goodbye';
	};
}

module.exports = myModule;

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

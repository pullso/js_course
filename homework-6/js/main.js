'use strict';

let startBtn = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName(
		'optionalexpenses-value'
	)[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
	countBtn = document.getElementsByTagName('button')[2],
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
	percentValue = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

let money, time;

function start() {
	money = +prompt('Ваш бюджет на месяц?', '10000');
	time = prompt('Введите дату в формате YYYY-MM-DD', '2010-10-12');
	while (isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '20000');
	}
}

//start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function() {
		for (let i = 0; i < 2; i++) {
			let a = prompt(
					'Введите обязательную статью расходов в этом месяце',
					'молоко'
				),
				b = prompt('Во сколько обойдется?', '200');
			if (
				typeof a === 'string' &&
				typeof a != null &&
				typeof b != null &&
				a != '' &&
				b != '' &&
				a.length < 50 &&
				b.length < 50
			) {
				console.log('done');
				appData.expenses[a] = b;
			} else {
				console.log('Неверные данные');
				i--;
			}
		}
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed(1);
		alert('Бюджет на 1 день: ' + appData.moneyPerDay);
		console.log('Бюджет на 1 день: ' + appData.moneyPerDay);
	},
	detectLevel: function() {
		if (appData.moneyPerDay < 100) {
			console.log('Минимальный уровень достатка');
		} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
			console.log('Средний уровень достатка');
		} else if (appData.moneyPerDay > 2000) {
			console.log('Высокий уровень достатка');
		} else {
			console.log('Ошибка');
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt('Какая сумма накоплений?', ''),
				percent = +prompt('Под какой процент', '');
			appData.monthIncome = (save / 100 / 12) * percent;
			alert(
				'Доход с ваших накоплений в месяц:' + appData.monthIncome.toFixed(1)
			);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 0; i < 3; i++) {
			appData.optionalExpenses[i] = prompt(
				'Статья необязательных расходов?',
				''
			);
		}
	},
	chooseIncome: function() {
		let items = prompt(
			'Что принесет дополнительный доход? Перечислите через запятую',
			''
		);
		for (let i = 0; i < 1; i++)
			if (typeof items === 'string' && typeof items != null && items != '') {
				console.log('done');
				appData.income = items.split(',');
			} else {
				console.log('Неверные данные');
				i--;
				continue;
			}
		appData.income.push(prompt('Может что-то еще?', ''));
		appData.income.sort();
		appData.income.forEach(function(item, i) {
			console.log('Способ дополнительного заработка ' + (i + 1) + ': ' + item);
		});
	},
};

//appData.chooseIncome();

/* for (let key in appData) {
	console.log(
		'Наша программа включает в себя данные: ' + key + ' ' + appData[key]
	);
} */

console.log(appData);

'use strict';

let money = +prompt("Ваш бюджет на месяц?", "10000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2010-10-12");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: false
};

appData.expenses = prompt("Введите обязательную статью расходов в этом месяце", "молоко");
appData.expenses += ":" + prompt("Во сколько обойдется?", "200");

alert("Бюджет на 1 день: " + money / 30);

console.log(appData);
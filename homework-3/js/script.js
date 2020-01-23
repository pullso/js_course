'use strict';

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "10000");
  time = prompt("Введите дату в формате YYYY-MM-DD", "2010-10-12");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "20000");
  }
}

start();



let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "молоко"),
      b = prompt("Во сколько обойдется?", "200");

    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
      a != '' && b != '' && a.length < 50 && b.length < 50) {
      console.log('done');
      appData.expenses[a] = b;
    } else {
      console.log('Неверные данные');
      i--;
    }
  }
}

chooseExpenses();
detectDayBudget();
detectLevel();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
  } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
  } else {
    console.log('Ошибка');
  }
}

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed(1);
  alert("Бюджет на 1 день: " + appData.moneyPerDay);
  console.log("Бюджет на 1 день: " + appData.moneyPerDay);
}

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какая сумма накоплений?"),
      percent = +prompt("Под какой процент");
    appData.monthIncome = save / 100 / 12 * percent;
    alert("Доход с ваших накоплений в месяц:" + appData.monthIncome.toFixed(1));
  }
}

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    appData.optionalExpenses[i] = prompt('Статья необязательных расходов?');
  }
}

chooseOptExpenses();

checkSavings();

console.log(appData);
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

/* for (let i = 0; i < 2; i++) {
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

} */
/* let i = 0;

while (i < 2) {
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
  i++;
} */

let i = 0;

do {
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
  i++;
} while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Бюджет на 1 день: " + appData.moneyPerDay);
console.log("Бюджет на 1 день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
  console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
  console.log('Высокий уровень достатка');
} else {
  console.log('Ошибка');
}

console.log(appData);
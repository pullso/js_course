let menuItem = document.querySelectorAll('.menu-item'),
	menu = document.querySelector('.menu'),
	title = document.querySelector('.title'),
	adv = document.querySelector('.adv'),
	promptText = document.querySelector('#prompt'),
	menuItemLi = document.createElement('li');

document.body.style.background = "url('img/apple_true.jpg') center no-repeat";

menu.insertBefore(menuItem[2], menuItem[1]);

menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый пункт';
menu.appendChild(menuItemLi);

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

promptText.textContent = prompt('Напишите свое отношение к технике Apple', '');

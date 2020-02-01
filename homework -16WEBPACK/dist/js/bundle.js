window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	//табы
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.add('show');
			tabContent[b].classList.remove('hide');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;

		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	//таймер
	let deadline = '2020-2-21';

	function getTimerRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor(t / 1000 / 60 / 60);

		if (seconds < 10) {
			seconds = '0' + seconds;
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		if (hours < 10) {
			hours = '0' + hours;
		}

		return {
			total: t,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimerRemaining(endtime);
			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}
	}

	setClock('timer', deadline);

	//модальное окно
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		decrBtn = document.querySelectorAll('.description-btn');

	decrBtn.forEach(function(item) {
		item.addEventListener('click', function() {
			overlay.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		});
	});

	more.addEventListener('click', function() {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	});

	more.addEventListener('click', function() {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	//es6
	// class Options {
	// 	constructor(height, width, bg, fontSize, textAlign) {
	// 		this.height = height;
	// 		this.width = width;
	// 		this.background = bg;
	// 		this.fontSize = fontSize;
	// 		this.textAlign = textAlign;
	// 	}
	// 	createDiv() {
	// 		let elem = document.createElement('div');
	// 		document.body.appendChild(elem);
	// 		let param = `height:${this.height}px; width:${this.width}px;background-color: ${this.background}; font-size: ${this.fontSize}px;  text-align:${this.textAlign}`;
	// 		elem.style.cssText = param;
	// 	}
	// }

	// const item = new Options(300, 350, 'red', 14, 'center');
	// item.createDiv();

	//FORM

	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...',
	};

	let form = document.querySelector('.main-form'),
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status');

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		let formData = new FormData(form);

		let obj = {};
		formData.forEach(function(value, key) {
			obj[key] = value;
		});

		let json = JSON.stringify(obj);
		request.send(json);

		request.addEventListener('readystatechange', function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4 && request.status == 200) {
				statusMessage.innerHTML = message.success;
			} else {
				statusMessage.innerHTML = message.failure;
			}
		});
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	});
});

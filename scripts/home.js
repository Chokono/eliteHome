[].forEach.call(document.querySelectorAll('.steklo'), (e) => {
    var t = [Math.floor(Math.random() * 220), Math.floor(Math.random() * 220), Math.floor(Math.random() * 220)];
    e.style.backgroundColor = `rgba(${t[0]},${t[1]},${t[2]},0.30)`;
});
let icon = document.getElementsByTagName('i')[0];
let menu = document.querySelector('.inner');
icon.addEventListener('click', e=>{
	if (icon.classList.contains('fa-bars')) {
		menu.classList.add('open');
		icon.classList.remove('fa-bars');
		icon.classList.add('fa-times');
	} else {
		menu.classList.remove('open');
		icon.classList.remove('fa-times');
		icon.classList.add('fa-bars');
	};
});
require('./disain.js');
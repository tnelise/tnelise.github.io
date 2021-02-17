// Get the root element
var r = document.querySelector(':root');

randomNumber = Math.round(Math.random()*3);

window.onload = function() {
	if (randomNumber == 0 || randomNumber == 1) {
		r.style.setProperty('--main-bg-color', '#FFFFCC');
		r.style.setProperty('--main-text-color', '#333');
		r.style.setProperty('--style-text-color', '#FF3300');
	}
	if (randomNumber == 2) {
		r.style.setProperty('--main-bg-color', '#EAFFFD');
		r.style.setProperty('--main-text-color', '#333');
		r.style.setProperty('--style-text-color', '#EE0066');
	}
	if (randomNumber == 3) {
		r.style.setProperty('--main-bg-color', '#DDF6DD');
		r.style.setProperty('--main-text-color', '#333');
		r.style.setProperty('--style-text-color', '#990099');
	}
};
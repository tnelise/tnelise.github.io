// Get the root element
var r = document.querySelector(':root');

randomNumber = Math.round(Math.random());

window.onload = function() {
	if (randomNumber == 0) {
		r.style.setProperty('--main-bg-color', '#FFFFCC');
		r.style.setProperty('--main-text-color', '#333');
		r.style.setProperty('--style-text-color', '#FF3300');
	}
	if (randomNumber == 1) {
		r.style.setProperty('--main-bg-color', '#CCFFDD');
		r.style.setProperty('--main-text-color', '#333');
		r.style.setProperty('--style-text-color', '#EE0066');
	}
}
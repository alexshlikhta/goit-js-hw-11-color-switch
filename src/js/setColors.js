import refs from './ref.js';

const { startBtn, stopBtn, body } = refs;

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const functionInterval = 1000;
let newInterval = 0;
let isActive = false;

function startChangeBodyColor() {
	newInterval = setInterval(() => {
		body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
	}, functionInterval);

	return (isActive = true);
}

function stopChangeBodyColor(newInterval) {
	clearInterval(newInterval);
	return (isActive = false);
}

startBtn.addEventListener('click', () => {
	isActive ? '' : startChangeBodyColor();
});

stopBtn.addEventListener('click', () => {
	stopChangeBodyColor(newInterval);
});

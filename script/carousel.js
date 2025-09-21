var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var stopBtn = document.querySelector(".stop");
var carousel = document.querySelector(".carousel");
var list = document.querySelector(".carousel__list");
var item = document.querySelector(".carousel__item");
var runningTime = document.querySelector(".timeRunning");

let timeRunning = 3000;
let timeAutoNext = 12000;
let isPaused = false;

stopBtn.onclick = function () {
	isPaused = !isPaused;
	const icon = document.querySelector(".stop i");
	icon.classList.replace("bx-stop", "bx-play");
	showSlider("stop");

	if (!isPaused) {
		showSlider("next");
		icon.classList.replace("bx-play", "bx-stop");
	}
};

nextBtn.onclick = function () {
	showSlider("next");
};

prevBtn.onclick = function () {
	showSlider("prev");
};

let runTimeOut;

let runNextAuto = setTimeout(() => {
	nextBtn.click();
}, timeAutoNext);

function resetTimeAnimation() {
	runningTime.style.animation = "none";
	runningTime.offsetHeight;
	runningTime.style.animation = null;
	runningTime.style.animation = "runningTime 12s linear 1 forwards";
}

function showSlider(type) {
	let sliderItemsDom = list.querySelectorAll(".carousel__item");

	if (type === "next") {
		list.appendChild(sliderItemsDom[0]);
		carousel.classList.add("next");
	} else if (type === "prev") {
		list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
		carousel.classList.add("prev");
	} else runningTime.style.animationPlayState = "paused";

	clearTimeout(runTimeOut);

	if (!isPaused) {
		runTimeOut = setTimeout(() => {
			carousel.classList.remove("next");
			carousel.classList.remove("prev");
		}, timeRunning);
	}

	clearTimeout(runNextAuto);

	if (!isPaused) {
		runNextAuto = setTimeout(() => {
			nextBtn.click();
		}, timeAutoNext);
		resetTimeAnimation();
	}
}
if (!isPaused) {
	resetTimeAnimation();
}

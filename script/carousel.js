var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var carousel = document.querySelector(".carousel");
var list = document.querySelector(".carousel__list");
var item = document.querySelector(".carousel__item");
var runningTime = document.querySelector(".timeRunning");

let timeRunning = 3000;
let timeAutoNext = 5500;

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
	runningTime.style.animation = "runningTime 7s linear 1 forwards";
}

function showSlider(type) {
	let sliderItemsDom = list.querySelectorAll(".carousel .carousel__list .carousel__item");

	if (type === "next") {
		list.appendChild(sliderItemsDom[0]);
		carousel.classList.add("next");
	} else {
		list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
		carousel.classList.add("prev");
	}

	clearTimeout(runTimeOut);

	runTimeOut = setTimeout(() => {
		carousel.classList.remove("next");
		carousel.classList.remove("prev");
	}, timeRunning);

	clearTimeout(runNextAuto);

	runNextAuto = setTimeout(() => {
		nextBtn.click();
	}, timeAutoNext);

	resetTimeAnimation();
}

resetTimeAnimation();

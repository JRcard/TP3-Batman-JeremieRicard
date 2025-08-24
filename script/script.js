/**************/
/*AUDIO PLAYER*/
/**************/

/* audio-003-A */
const audio_003_A = new Audio("https://stream.mux.com/O4h5z00885HEucNNa1rV02wZapcGp01FXXoJd35AHmGX7g/audio.m4a");
const play_003_A = document.getElementById("play-003-A");
const rewind_003_A = document.getElementById("rewind-003-A");

audio_003_A.addEventListener("loadeddata", () => {
	let duration = audio_003_A.duration;
	document.getElementById("duree-003-A").innerHTML = "00:" + Math.floor(duration);
});

play_003_A.addEventListener("click", () => {
	if (audio_003_A.paused) {
		audio_003_A.play();
		play_003_A.classList.remove("bx-play");
		play_003_A.classList.add("bx-pause");
	} else {
		audio_003_A.pause();
		play_003_A.classList.remove("bx-pause");
		play_003_A.classList.add("bx-play");
	}
});

rewind_003_A.addEventListener("click", () => {
	audio_003_A.currentTime = 0;
});

/* audio-003-B */
const audio_003_B = new Audio("https://stream.mux.com/O4h5z00885HEucNNa1rV02wZapcGp01FXXoJd35AHmGX7g/audio.m4a");
const play_003_B = document.getElementById("play-003-B");
const rewind_003_B = document.getElementById("rewind-003-B");

audio_003_B.addEventListener("loadeddata", () => {
	let duration = audio_003_B.duration;
	document.getElementById("duree-003-B").innerHTML = "00:" + Math.floor(duration);
});

play_003_B.addEventListener("click", () => {
	if (audio_003_B.paused) {
		audio_003_B.play();
		play_003_B.classList.remove("bx-play");
		play_003_B.classList.add("bx-pause");
	} else {
		audio_003_B.pause();
		play_003_B.classList.remove("bx-pause");
		play_003_B.classList.add("bx-play");
	}
});

rewind_003_B.addEventListener("click", () => {
	audio_003_B.currentTime = 0;
});

/* audio-003-C */
const audio_003_C = new Audio("https://stream.mux.com/O4h5z00885HEucNNa1rV02wZapcGp01FXXoJd35AHmGX7g/audio.m4a");
const play_003_C = document.getElementById("play-003-C");
const rewind_003_C = document.getElementById("rewind-003-C");

audio_003_C.addEventListener("loadeddata", () => {
	let duration = audio_003_C.duration;
	document.getElementById("duree-003-C").innerHTML = "00:" + Math.floor(duration);
});

play_003_C.addEventListener("click", () => {
	if (audio_003_C.paused) {
		audio_003_C.play();
		play_003_C.classList.remove("bx-play");
		play_003_C.classList.add("bx-pause");
	} else {
		audio_003_C.pause();
		play_003_C.classList.remove("bx-pause");
		play_003_C.classList.add("bx-play");
	}
});

rewind_003_C.addEventListener("click", () => {
	audio_003_C.currentTime = 0;
});

/**************/
/*AUDIO PLAYER*/
/**************/

export const setupAudioPlayer = (src, btnPlayId, btnRewinId, dureeId) => {
	const audio = new Audio(src);
	const play = document.getElementById(btnPlayId);
	const rewind = document.getElementById(btnRewinId);
	const afficheDuree = document.getElementById(dureeId);

	audio.addEventListener("loadeddata", () => {
		let duration = audio.duration;
		afficheDuree.innerHTML = "00:" + Math.floor(duration);
	});

	play.addEventListener("click", () => {
		if (audio.paused) {
			audio.play();
			play.classList.remove("bx-play");
			play.classList.add("bx-pause");
		} else {
			audio.pause();
			play.classList.remove("bx-pause");
			play.classList.add("bx-play");
		}
	});

	rewind.addEventListener("click", () => {
		audio.currentTime = 0;
	});
};

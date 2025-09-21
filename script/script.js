import { setupAudioPlayer } from "./audio_player.js";

/* AUDIO PLAYERS */
/* audio-003-A */
setupAudioPlayer("audio/Rapport_003-A.mp3", "play-003-A", "rewind-003-A", "duree-003-A");

/* audio-003-B */
setupAudioPlayer("audio/Rapport_003-B.mp3", "play-003-B", "rewind-003-B", "duree-003-B");

/* audio-003-C */
setupAudioPlayer("audio/Rapport_003-C.mp3", "play-003-C", "rewind-003-C", "duree-003-C");

const nomReel = document.querySelector("#nomReel");
const analyse = document.querySelector("#analyse");

nomReel.addEventListener("mouseover", (event) => {
	event.target.innerHTML = "Bruce Wayne";
	setTimeout(() => {
		event.target.innerHTML = "█████ ████████";
	}, 1000);
});

document.addEventListener("DOMContentLoaded", (event) => {
	gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, TextPlugin);

	gsap.to("#analyse", {
		duration: 1,
		scrambleText: "Analyse en cours...",
		repeat: -1,
		repeatDelay: 1,
		scrollTrigger: {
			trigger: "#analyse",
			start: "top 70%",
			toggleActions: "play none none none",
		},
	});

	const tl = gsap.timeline();

	tl.to("#frappe", {
		duration: 2,
		text: "Je suis la main qui frappe quand la loi hésite.",
		ease: "none",
	})
		.to("#oeil", {
			duration: 2,
			text: "Je suis l’œil qui veille quand les sirènes se taisent.",
			ease: "none",
		})
		.to("#besoin", {
			duration: 2,
			text: "Je suis ce que Gotham refuse d’admettre qu’elle a besoin.",
			ease: "none",
		})
		.to("#suis", {
			duration: 2,
			text: "Je suis...",
			ease: "none",
		})
		.to("#bat", {
			duration: 2,
			text: "BATMAN",
			ease: "none",
		});
});

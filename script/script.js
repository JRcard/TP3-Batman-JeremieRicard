import { setupAudioPlayer } from "./audio_player.js";

/* AUDIO PLAYERS  */
/* audio-003-A */
setupAudioPlayer("../audio/Rapport_003-A.mp3", "play-003-A", "rewind-003-A", "duree-003-A");

/* audio-003-B */
setupAudioPlayer("../audio/Rapport_003-B.mp3", "play-003-B", "rewind-003-B", "duree-003-B");

/* audio-003-C */
setupAudioPlayer("../audio/Rapport_003-C.mp3", "play-003-C", "rewind-003-C", "duree-003-C");

/* Animate on scroll */
AOS.init();

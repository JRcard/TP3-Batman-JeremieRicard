/* https://www.youtube.com/watch?v=1o3IToGRSoI&ab_channel=OptimisticWeb */

const isReducedMotion = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
const isTouch = window.matchMedia("(pointer: coarse)").matches;
const shouldRun = !isReducedMotion && !isTouch;

if (shouldRun) {
	let mouseX = 0;
	let mouseY = 0;

	const coordinates = document.querySelector("#coordinates span");
	const pointer = document.querySelector(".pointer");

	window.addEventListener("mousemove", (e) => {
		mouseX = e.clientX;
		mouseY = e.clientY;

		coordinates.innerHTML = `x: ${mouseX} y: ${mouseY}`;
	});

	const animate = () => {
		pointer.style.setProperty("--mouseX", `${mouseX}px`);
		pointer.style.setProperty("--mouseY", `${mouseY}px`);
		requestAnimationFrame(animate);
	};

	animate();
}

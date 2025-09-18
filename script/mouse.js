/* https://www.youtube.com/watch?v=1o3IToGRSoI&ab_channel=OptimisticWeb */

const isReducedMotion = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
const isTouch = window.matchMedia("(pointer: coarse)").matches;
const shouldRun = !isReducedMotion && !isTouch;

if (shouldRun) {
	let mouseX = 0;
	let mouseY = 0;

	const pointer = document.querySelector(".pointer");
	const batPointer = document.querySelector(".batPointer");

	window.addEventListener("mousemove", (e) => {
		mouseX = e.clientX;
		mouseY = e.clientY;

		const gradientCenterX = (mouseX / window.innerWidth) * 100;
		const gradientCenterY = (mouseY / window.innerHeight) * 100;
		pointer.style.background = `radial-gradient(circle 200px at ${gradientCenterX}% ${gradientCenterY}%, transparent 10%, #0d0d0d)`;
	});

	const animate = () => {
		batPointer.style.setProperty("--mouseX", `${mouseX}px`);
		batPointer.style.setProperty("--mouseY", `${mouseY}px`);
		requestAnimationFrame(animate);
	};

	animate();
}

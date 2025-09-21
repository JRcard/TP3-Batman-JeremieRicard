document.getElementById("toggleFurtif").addEventListener("click", () => {
	document.body.classList.toggle("furtif");
	localStorage.setItem("modeFurtif", document.body.classList.contains("furtif"));
});

if (localStorage.getItem("modeFurtif") === "true") {
	document.body.classList.add("furtif");
}

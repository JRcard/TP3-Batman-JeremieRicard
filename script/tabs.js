const btn_statut = document.querySelector("#statut");
const btn_synchro = document.querySelector("#synchro");
const btn_protocole = document.querySelector("#protocole");
const btn_acces = document.querySelector("#acces");
const btn_flux = document.querySelector("#flux");
const btn_note = document.querySelector("#indice");

const dialogues = document.querySelectorAll("div.tab__dialog");
const tabs = document.querySelectorAll("a.tab__btn");

btn_statut.addEventListener("click", (e) => {
	const id = btn_statut.dataset.dialogId;
	showDialog(id);
	currentTab(e.target);
});
btn_statut.addEventListener("keyup", (e) => {
	// You can check for a specific key if needed, e.g., the Enter key (keyCode 13)
	if (e.keyCode === 13) {
		const id = btn_statut.dataset.dialogId;
		showDialog(id);
		currentTab(e.target);
	}
});
btn_synchro.addEventListener("click", (e) => {
	const id = btn_synchro.dataset.dialogId;
	showDialog(id);
	currentTab(e.target);
});
btn_synchro.addEventListener("keyup", (e) => {
	// You can check for a specific key if needed, e.g., the Enter key (keyCode 13)
	if (e.keyCode === 13) {
		const id = btn_synchro.dataset.dialogId;
		showDialog(id);
		currentTab(e.target);
	}
});
btn_protocole.addEventListener("click", (e) => {
	const id = btn_protocole.dataset.dialogId;
	showDialog(id);
	currentTab(e.target);
});
btn_protocole.addEventListener("keyup", (e) => {
	// You can check for a specific key if needed, e.g., the Enter key (keyCode 13)
	if (e.keyCode === 13) {
		const id = btn_protocole.dataset.dialogId;
		showDialog(id);
		currentTab(e.target);
	}
});
btn_acces.addEventListener("click", (e) => {
	const id = btn_acces.dataset.dialogId;
	showDialog(id);
	currentTab(e.target);
});
btn_acces.addEventListener("keyup", (e) => {
	// You can check for a specific key if needed, e.g., the Enter key (keyCode 13)
	if (e.keyCode === 13) {
		const id = btn_acces.dataset.dialogId;
		showDialog(id);
		currentTab(e.target);
	}
});
btn_flux.addEventListener("click", (e) => {
	const id = btn_flux.dataset.dialogId;
	showDialog(id);
	currentTab(e.target);
});
btn_flux.addEventListener("keyup", (e) => {
	// You can check for a specific key if needed, e.g., the Enter key (keyCode 13)
	if (e.keyCode === 13) {
		const id = btn_flux.dataset.dialogId;
		showDialog(id);
		currentTab(e.target);
	}
});
btn_note.addEventListener("click", (e) => {
	toggle(e.target);
});

const currentTab = (btn) => {
	if (btn.classList.contains("tab__btn--current")) {
		btn.classList.remove("tab__btn--current");
	} else toggleCurrent(btn);
};

const toggleCurrent = (current) => {
	tabs.forEach((btn) => {
		if (btn.classList.contains("tab__btn--current")) {
			btn.classList.remove("tab__btn--current");
		}
		current.classList.add("tab__btn--current");
	});
};
const showDialog = (id) => {
	const dialog = document.getElementById(id);
	if (!dialog.classList.contains("hidden")) {
		dialog.classList.add("hidden");
	} else toggleDialog(dialog);
};

const toggleDialog = (showForm) => {
	dialogues.forEach((dialog) => {
		if (!dialog.classList.contains("hidden")) {
			dialog.classList.add("hidden");
		}
		showForm.classList.remove("hidden");
	});
};

const toggle = (btn) => {
	if (!btn.textContent.includes("Indice:P.3:furtif")) {
		btn.innerHTML = "Indice:P.3:furtif";
	} else btn.innerHTML = "As-tu tout vue?";
};

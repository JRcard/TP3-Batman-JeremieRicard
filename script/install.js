let deferredInstallPrompt = null;
const installButton = document.getElementById("butInstall");
const installBtnMobile = document.getElementById("butIntallMobil");
installButton.addEventListener("click", installPWA);
installBtnMobile.addEventListener("click", installPWA);

window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
	// CODELAB: Add code to save event & show the install button.
	deferredInstallPrompt = evt;
	evt.preventDefault();
	installButton.removeAttribute("hidden");
	installBtnMobile.removeAttribute("hidden");
	console.log("a la fin du saveBeforeInsatallPromptEvent()");
}

function installPWA(evt) {
	// Add code show install prompt & hide the install button.
	deferredInstallPrompt.prompt();
	// Hide the install button, it can't be called twice.
	evt.srcElement.setAttribute("hidden", true);
	// Log user response to prompt.

	deferredInstallPrompt.userChoice.then((choice) => {
		if (choice.outcome === "accepted") {
			console.log("User accepted the A2HS prompt", choice);
		} else {
			console.log("User dismissed the A2HS prompt", choice);
		}
		deferredInstallPrompt = null;
	});
}

window.addEventListener("appinstalled", logAppInstalled);

function logAppInstalled(evt) {
	// Add code to log the event
	console.log("Bat app was installed.", evt);
}

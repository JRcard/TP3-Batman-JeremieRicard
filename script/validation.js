const code_secret = document.querySelector(".form__code-secret");
const code_1_input = document.getElementById("code_1");
const code_2_input = document.getElementById("code_2");
const code_3_input = document.getElementById("code_3");
let count = 0;

/* Double vérification */
const form = document.querySelector(".double_verification__form");
const nomReelInput = document.getElementById("nomReel");
const aliasInput = document.getElementById("alias");
const emailInput = document.getElementById("email");
const villeSelected = document.getElementById("ville");
const agentAutoriseInput = document.getElementById("agentAutorise");
const telInput = document.getElementById("tel");
const protocoleInput = document.getElementById("protocole");
const codePostalInput = document.getElementById("codePostal");
const submitButton = document.querySelector(".form__btn");
let agentCount = 0;
let protocoleCount = 0;

const validateAccess = () => {
	const code_1_value = parseInt(code_1_input.value).toString(2);
	const code_2_value = parseInt(code_2_input.value).toString(2);
	const code_3_value = parseInt(code_3_input.value).toString(2);
	if (code_1_value != "10110" || code_2_value != "10000" || code_3_value != "10011") {
		if (count < 2) {
			count++;
			setError(code_secret, `Accès refusé: il te reste ${3 - count} chance(s)`);
			return false;
		} else {
			setError(code_secret, "Indice: La forme des champs numériques ne te rappelle rien?");
			count = 0;
			return false;
		}
	} else return true;
};

const validateForm = () => {
	let noError = true;
	const nomReelValue = nomReelInput.value.trim();
	const aliasValue = aliasInput.value.trim();
	const emailValue = emailInput.value.trim();
	const villeValue = villeSelected.value;
	const agentAutoriseValue = parseInt(agentAutoriseInput.value);
	const telValue = telInput.value.trim();
	const protocoleValue = protocoleInput.value.trim();
	const codePostalValue = codePostalInput.value.trim().toUpperCase();

	if (!nameValidator(nomReelValue, nomReelInput)) {
		noError = false;
	}
	if (!nameValidator(aliasValue, aliasInput)) {
		noError = false;
	}
	if (emailValue === "") {
		setError(emailInput, "Ce champ est obligatoire");
		noError = false;
	} else if (!isValidEmail(emailValue)) {
		setError(emailInput, "Le courriel contient des caratères invalides et ne respecte pas la forme sémentique d'une adresse courriel.");
		noError = false;
	} else {
		setSuccess(emailInput);
	}

	if (villeValue === "") {
		setError(villeSelected, "Ce champ est obligatoire");
		noError = false;
	} else if (villeValue != "Gotham") {
		setError(villeSelected, "Really!? " + villeValue + "!?");
		noError = false;
	} else setSuccess(villeSelected);

	if (isNaN(agentAutoriseValue)) {
		setError(agentAutoriseInput, "Ce champ est obligatoire");
		noError = false;
	} else if (!verifyAgent(agentAutoriseValue)) {
		if (agentCount < 2) {
			agentCount++;
			setError(agentAutoriseInput, `Accès refusé: il te reste ${3 - agentCount} chance(s)`);
			noError = false;
		} else {
			setError(agentAutoriseInput, "Indice: Arsenal technologique: Entrée #006");
			agentCount = 0;
			noError = false;
		}
	} else setSuccess(agentAutoriseInput);
	if (telValue === "") {
		setError(telInput, "Ce champ est obligatoire");
		noError = false;
	} else if (!verifyTelFormat(telValue)) {
		setError(telInput, "Le format n'est pas correspondant à (###) ###-####");
		noError = false;
	} else {
		setSuccess(telInput);
	}

	if (protocoleValue === "") {
		setError(protocoleInput, "Ce champ est obligatoire");
		noError = false;
	} else if (!verifyProtocole(protocoleValue)) {
		if (protocoleCount < 2) {
			protocoleCount++;
			setError(protocoleInput, `Accès refusé: il te reste ${3 - protocoleCount} chance(s)`);
			noError = false;
		} else {
			setError(protocoleInput, "Indice: dossier personnel: Entrée #002");
			protocoleCount = 0;
			noError = false;
		}
	} else setSuccess(protocoleInput);

	if (codePostalValue === "") {
		setError(codePostalInput, "Ce champ est obligatoire");
		noError = false;
	} else if (!verifyCodePostal(codePostalValue)) {
		setError(codePostalInput, "Le Code Postal ne correspond pas au bon format (A1A 1A1). Il ne doit pas débuterpar un 'Z' ou 'W' ni contenir D, F, I, O, Q ou U");
		noError = false;
	} else setSuccess(codePostalInput);

	return noError; // Return true if there are no errors, false otherwise
};

const setError = (element, message) => {
	const inputControl = element.parentElement; // Get the parent element of the input field

	// Find the error message element within the parent element
	const errorDisplay = inputControl.querySelector(".form--errorMessage");

	errorDisplay.innerText = message;
	element.classList.add("error");
	element.classList.remove("success");
};

const setSuccess = (element) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector(".form--errorMessage");

	errorDisplay.innerText = "";
	element.classList.add("success");
	element.classList.remove("error");
};

const isValidEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};
const verifyTelFormat = (tel) => {
	const re = /\([0-9]+\)\s[0-9]+-[0-9]+/i;
	return re.test(tel);
};
const verifyAgent = (agent) => {
	return btoa(agent) === "Nw==";
};
const verifyProtocole = (protocole) => {
	return btoa(protocole) === "U0lMRU5DRS05";
};
const verifyCodePostal = (codePostal) => {
	const re = /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ ]?\d[ABCEGHJKLMNPRSTVXY]\d$/i;
	return re.test(codePostal);
};

const nameValidator = (nom, input) => {
	if (nom === "") {
		setError(input, "Ce champ est obligatoire");
		return false;
	} else if (nom.length < 2) {
		setError(input, "Ce champ doit contenir au moins 2 caractères.");
		return false;
	} else if (nom.length > 75) {
		setError(input, "Ce champ doit contenir moins de 75 caractères.");
		return false;
	} else if (/\d/.test(nom) || !/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/.test(nom[0])) {
		setError(input, "Ce champ ne doit pas contenir de nombres et doit commencer par une lettre");
		return false;
	} else {
		setSuccess(input);
		return true;
	}
};

/* évite les injections malveillantes */
const verifyInput = (input) => {
	return !/[\\&<>"]/g.test(input);
};

code_secret.addEventListener("submit", (e) => {
	e.preventDefault();
	if (validateAccess()) {
		console.log("reussi");
		setSuccess(code_secret);
		count = 0;
		document.querySelector(".double_verification").classList.add("visible");
		code_secret.classList.add("hidden");
	}
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (validateForm()) {
		window.location.href = "https://portfolio.jeremiericard.ca";
	}
});

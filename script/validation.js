const code_secret = document.querySelector(".form__code-secret");
const code_1_input = document.getElementById("code_1");
const code_2_input = document.getElementById("code_2");
const code_3_input = document.getElementById("code_3");
let count = 0;

/* const form = document.querySelector(".form");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitButton = document.querySelector(".form__btn"); */

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
	const firstNameValue = firstNameInput.value.trim();
	const lastNameValue = lastNameInput.value.trim();
	const emailValue = emailInput.value.trim();
	const messageValue = messageInput.value.trim();

	nameValidator(firstNameValue, firstNameInput);
	nameValidator(lastNameValue, lastNameInput);

	if (emailValue === "") {
		setError(emailInput, "Le courriel ne doit pas être vide");
		noError = false;
	} else if (!isValidEmail(emailValue)) {
		setError(emailInput, "Le courriel contient des caratères invalides et ne respecte pas la forme sémentique d'une adresse courriel.");
		noError = false;
	} else {
		setSuccess(emailInput);
	}

	if (messageValue === "") {
		setError(messageInput, "Le message ne doit pas être vide");
		noError = false;
	} else if (!verifyInput(messageValue)) {
		setError(messageInput, "Le message contient des caractères qui pourrait servir à des activitées malvaillantes ( antislash, &, <, > et le guillement double)");
		noError = false;
	} else {
		setSuccess(messageInput);
	}

	return noError; // Return true if there are no errors, false otherwise
};

const setError = (element, message) => {
	const inputControl = element.parentElement; // Get the parent element of the input field

	// Find the error message element within the parent element
	const errorDisplay = inputControl.querySelector(".form--errorMessage");

	errorDisplay.innerText = message;
	inputControl.classList.add("error");
	inputControl.classList.remove("success");
};

const setSuccess = (element) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector(".form--errorMessage");

	errorDisplay.innerText = "";
	inputControl.classList.add("success");
	inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const nameValidator = (nom, input) => {
	if (nom === "") {
		setError(input, "Ce champ est requis.");
		noError = false;
	} else if (nom.length < 2) {
		setError(input, "Ce champ doit contenir au moins 2 caractères.");
		noError = false;
	} else if (nom.length > 75) {
		setError(input, "Ce champ doit contenir moins de 75 caractères.");
		noError = false;
	} else if (/\d/.test(nom) || !/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/.test(nom[0])) {
		setError(input, "Ce champ ne doit pas contenir de nombres et doit commencer par une lettre");
		noError = false;
	} else setSuccess(input);
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

/* form.addEventListener("submit", (e) => {
	e.preventDefault();
	validateForm();
	if (validateForm()) {
		window.location.href = "confirmation.html";
	}
}); */

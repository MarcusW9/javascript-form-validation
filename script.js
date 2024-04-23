const form = document.querySelector("form");

const uname = document.querySelector("#uname");
const unameError = document.querySelector("#uname + span.error")
const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error")
const phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phone + span.error")
const comment = document.querySelector("#comment");

email.addEventListener("input", (e) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error"
    } else {
        showEmailError()
    }
})

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address."
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Please enter a valid email address format."
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    } else if (email.validity.patternMismatch) {
        emailError.textContent = `Email should consist of one or more letters (lower or upper case) or numbers, followed by "@bigcorp.eu".`
    }
    emailError.className = "error active";
}

uname.addEventListener("input", (e) => {
    if (uname.validity.valid) {
        unameError.textContent = ""
        unameError.className = "error"
    } else {
        showUnameError()
    }
})

function showUnameError() {
    if (uname.validity.valueMissing) {
        unameError.textContent = "You need to enter a username"
    } else if (uname.validity.patternMismatch) {
        unameError.textContent = "Your username should be a single letter, followed by a dot and three or more characters"
    }
    unameError.className = "error active"
}

phone.addEventListener("input", (e) => {
    if (phone.validity.valid) {
        phoneError.textContent = ""
        phoneError.className = "error"
    } else {
        showPhoneError()
    }
})

function showPhoneError() {
    if (phone.validity.valueMissing) {
        phoneError.textContent = "Please enter a phone number"
    } else if (phone.validity.patternMismatch) {
        phoneError.textContent = `Phone number should be a valid format`;
    }
    phoneError.className = "error active"
}

function showErrors() {
    if (!email.validity.valid) {
        showEmailError()
    }
    if (!uname.validity.valid) {
        showUnameError()
    }
    if (!phone.validity.valid) {
        showPhoneError()
    }
}

form.addEventListener("submit", (e) => {
    if (!email.validity.valid ||
    !uname.validity.valid ||
    !phone.validity.valid
    ) {
        showErrors()
        e.preventDefault();
    }
})
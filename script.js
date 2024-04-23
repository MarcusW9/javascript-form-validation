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
    } else if (phone.validity.typeMismatch) {
        phoneError.textContent = "Please enter numbers only"
    } else if (phone.validity.tooLong) {
        phoneError.textContent = `Phone number should be at least ${phone.maxLength} characters; you entered ${phone.value.length}.`;
    }
}
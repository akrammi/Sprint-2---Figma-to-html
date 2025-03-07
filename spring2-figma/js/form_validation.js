const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const textarea = document.getElementById('textarea');
const form = document.getElementById('contact-form');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

const feedbackContainer = document.getElementById('form-feedback');

function validateName() {
    const nameLength = nameInput.value.trim().length;
    if (nameLength < 3 || nameLength > 30) {
        nameError.classList.remove('hidden');
    } else {
        nameError.classList.add('hidden');
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailLength = email.length;

    if (emailLength < 3 || emailLength > 30 || !emailRegex.test(email)) {
        emailError.classList.remove('hidden');
    } else {
        emailError.classList.add('hidden');
    }
}

function validateMessage() {
    const messageLength = textarea.value.trim().length;
    if (messageLength < 100 || messageLength > 400)
        messageError.classList.remove('hidden');
    else
        messageError.classList.add('hidden');
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
textarea.addEventListener('input', validateMessage);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateName();
    validateEmail();
    validateMessage();

    if (nameError.classList.contains('hidden') && emailError.classList.contains('hidden') && messageError.classList.contains('hidden')) {
        feedbackContainer.textContent = "Form submitted successfully";
        feedbackContainer.classList.remove('hidden');
        feedbackContainer.classList.add('text-green-500'); 
    } else {
        feedbackContainer.textContent = "Please fill in the form correctly";
        feedbackContainer.classList.remove('hidden');
        feedbackContainer.classList.add('text-red-500'); 
    }
});

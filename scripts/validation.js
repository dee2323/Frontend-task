
const form = document.querySelector('.signUp-form');
const clearBtn = document.querySelector('#clear');
/////////////////////////////////////////
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // validatePassword();
    // validateFullName();
    // validateAge();
    // validatePhoneNumber();
    // validateName();
    // validateEmail();
    if (validateName() && validateFullName() && validateAge() && validatePhoneNumber() && validateEmail() && validatePassword()) {
        clearInputs();
        alert('your request submitted');
    }
});
clearBtn.addEventListener('click', clearInputs)
/////////////////////////////////
function validatePassword() {
    const password = form.querySelector('#password').value;
    if (password.length == 0 || password.length < 6 || password.length > 24 || !containsLetter(password) ||
        !containsNumber(password) ||
        !containsSpecialCharacter(password)) {
        displayErrorMessage('password', 'must be at least 8 characters and contain letters, numbers, "-", "_", and "@".')
        return false;
    } else {
        const confirmPassword = form.querySelector('#cPassword').value;
        if (password !== confirmPassword) {
            displayErrorMessage('password', 'Passwords do not match!')
            return false;
        }
    }
    clearErrorMessage('password');
    return true;
}
function validateName() {
    const username = form.querySelector('#name').value;
    const usernamePattern = /^[a-zA-Z0-9-_@]{3,}$/;

    if (!usernamePattern.test(username)) {
        displayErrorMessage('name', 'must be at least 3 characters and contain letters, numbers, "-", "_", and "@".');
        return false;
    }
    clearErrorMessage('name');
    return true;
}
function validateAge() {
    const age = form.querySelector('#age').value;
    console.log('age', age)

    if (age > 0 && age < 18 || age > 100) {
        displayErrorMessage('age', 'must be between 18 and 100 years.');
        return false;
    }

    clearErrorMessage('age');
    return true;
}
function validateFullName() {
    const fullName = form.querySelector('#f-name').value;

    if (fullName.length < 3 || fullName.length > 15 || !fullName) {
        displayErrorMessage('f-name', 'must be between 3 and 15 characters.');
        return false;
    }

    clearErrorMessage('f-name');
    return true;
}
function validateEmail() {
    const email = form.querySelector('#email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        displayErrorMessage('email', 'Please enter a valid email address.');
        return false;
    }

    clearErrorMessage('email');
    return true;
}
function validatePhoneNumber() {
    let phone = document.querySelector('#mobile').value.toString().split('');
    console.log(phone)

    if (phone.length !== 10 || phone[0] != 0 || phone[1] != 5) {
        displayErrorMessage('mobile', 'Invalid phone number.');
        return false;
    }

    clearErrorMessage('mobile');
    return true;
}
function displayErrorMessage(fieldId, message) {
    const errorElement = document.querySelector(`#${fieldId}-error`);
    if (!errorElement) {
        const field = form.querySelector(`#${fieldId}`);
        const errorMessage = document.createElement('span');
        errorMessage.id = `${fieldId}-error`;
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        field.parentNode.appendChild(errorMessage);
    } else {
        errorElement.textContent = message;
    }
}

function clearErrorMessage(fieldId) {
    const errorElement = document.querySelector(`#${fieldId}-error`);
    if (errorElement) {
        errorElement.parentNode.removeChild(errorElement);
    }
}
function clearInputs() {
    const inputElements = form.querySelectorAll('input');
    inputElements.forEach(input => {
        input.value = '';
        clearErrorMessage(input.id);
    })

}
/////////////////////////////////////
function containsLetter(text) {
    return /[a-zA-Z]/.test(text);
}

function containsNumber(text) {
    return /\d/.test(text);
}

function containsSpecialCharacter(text) {
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(text);
}


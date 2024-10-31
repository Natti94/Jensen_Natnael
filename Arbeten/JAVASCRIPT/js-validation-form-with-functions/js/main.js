let form = document.getElementById('register-form');
form.addEventListener('submit', function(event) {
    // Prevents the default behavior of an element
    // In this case prevents the form from reloading the page
    event.preventDefault()

    let inputEmail = document.getElementById('inputEmail');
    let inputPassword = document.getElementById('inputPassword');
    let inputConfirmPassword = document.getElementById('inputConfirmPassword');
    let inputAddress = document.getElementById('inputAddress');
    let inputAddress2 = document.getElementById('inputAddress2');
    let inputCity = document.getElementById('inputCity');
    let inputZip = document.getElementById('inputZip');
    let formMessages = document.getElementById('form-messages');
    // console.log(inputEmail);
    // console.log(inputEmail.value);

   
    let errorMessages = "";
    errorMessages += isInputRequired(inputEmail, 'Email')
    errorMessages += isInputRequired(inputAddress, 'Address')
    errorMessages += isInputRequired(inputAddress2, 'Second address')
    errorMessages += isInputRequired(inputCity, 'City')
    errorMessages += isInputRequired(inputZip, 'Zip')


    // if (isInputEmpty(inputEmail)) {
    //     errorMessages += 'Email is required <br>';
    // } 

    // if (isInputEmpty(inputAddress)) {
    //     errorMessages += 'Address is required <br>';
    // } 

    // if (isInputEmpty(inputAddress2)) {
    //     errorMessages += 'Second address is required <br>';
    // } 

    // if (isInputEmpty(inputCity)) {
    //     errorMessages += 'City is required <br>';
    // } 

    // if (isInputEmpty(inputZip)) {
    //     errorMessages += 'Zip is required <br>';
    // } 
       
    if (inputPassword.value == "") {
        errorMessages += 'Password is required <br>';
    } else if (inputPassword.value.length < 6 || inputPassword.value.length > 9) {
        errorMessages += 'Password must be between 6-9 characters long <br>';
    }
    
    if (inputConfirmPassword.value != inputPassword.value) {
        errorMessages += 'Confirm password does not match <br>';
    }

    if (errorMessages == "") {
        displaySuccessMessage(formMessages);
    } else { 
        displayErrorMessage(formMessages, errorMessages);
    }
})


function displayErrorMessage(formMessages, errorMessages) {
    formMessages.innerHTML = `
        <div class="alert alert-danger">
            ${errorMessages}
        </div>`;
}


function displaySuccessMessage(formMessages) {
    formMessages.innerHTML = `
        <div class="alert alert-success">
           You are registered :)
        </div>`;
}

function isInputRequired(input, fieldName) {
    if (isInputEmpty(input)) {
        return `${fieldName} is required <br>`;
    } 

    return "";
}


function isInputEmpty(input) {
    return input.value.trim() == ""
}

function generateBirthYearRangeSelectOptionsHTML(startYear, endYear, defaultYear) {
    let birthYearOptionsHTML = "";
    for (let i = startYear; i >= endYear; i--) {
        if (i === defaultYear) {
            birthYearOptionsHTML += `<option selected>${i}</option>`;
        } else {
            birthYearOptionsHTML += `<option>${i}</option>`;
        }
    }

    return birthYearOptionsHTML;
}


let currentYear = new Date().getFullYear(); // 2022
document.getElementById('selectBirthYear').innerHTML = generateBirthYearRangeSelectOptionsHTML(currentYear, currentYear - 100, 1990);

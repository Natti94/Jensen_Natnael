// input fält (namn/alias + telefon nr) & skapa knapp //
function registerUser() 
{
let nameFieldType = document.getElementById('nameFieldType');
let phoneFieldType = document.getElementById('phoneFieldType');
let toDisplayUserName = document.getElementById('registeredName');
let toDisplayUserPhone = document.getElementById('registeredPhone');
let editUser = document.getElementById('ändra');
let removeUser = document.getElementById('radera');
// lagrande för användare //
if (nameFieldType.value !== "" && phoneFieldType.value !== "")
{
toDisplayUserName.value = nameFieldType.value;
toDisplayUserPhone.value = phoneFieldType.value;
toDisplayUserName.style.display = "inherit";
toDisplayUserPhone.style.display = "inherit";
toDisplayUserName.style.background = "lightgray";
toDisplayUserPhone.style.background = "lightgray";
editUser.style.display = "inherit";
removeUser.style.display = "inherit";
}
// reset på nameFieldType & phoneFieldType //
{
nameFieldType.value = "";
phoneFieldType.value = "";    
}
}


// redigerings knapp som false //
let isEditing = false;
function editUser() 
{
let editButton = document.getElementById('ändra');
let nameField = document.getElementById('registeredName');
let phoneField = document.getElementById('registeredPhone');   
// redigerings status //
isEditing = !isEditing;
if (isEditing)
{
// spara knapp //
nameField.readOnly = false;
phoneField.readOnly = false;
nameField.style.background = "white";
phoneField.style.background = "white";
editButton.innerText = "Spara";
} 
else 
{
// redigering av knapp //
nameField.readOnly = true;
phoneField.readOnly = true;
nameField.style.background = "lightgray";
phoneField.style.background = "lightgray";
editButton.innerText = "Ändra";
}
}


// raderings knapp //
function removeUser() 
{    
let removeButton = document.getElementById('radera')
let removeUserName = document.getElementById('registeredName')
let removeUserPhone = document.getElementById('registeredPhone')
// INTE KLART //
}


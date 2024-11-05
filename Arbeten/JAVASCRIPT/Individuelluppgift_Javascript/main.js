// input fält (namn/alias + telefon nr) & skapa knapp //
function registerUser() 
{
let nameFieldType = document.getElementById('nameFieldType');
let phoneFieldType = document.getElementById('phoneFieldType');
let toDisplayUserName = document.getElementById('registeredName')
let toDisplayUserPhone = document.getElementById('registeredPhone')
let editUser = document.getElementById('ändra');
let removeUser = document.getElementById('radera');
let errorMessage = document.getElementById('errorMessage');
// lagrande för användare //
if (nameFieldType.value !== "" && phoneFieldType.value !== "")
{
toDisplayUserName.value = nameFieldType.value;
toDisplayUserPhone.value = phoneFieldType.value;
toDisplayUserName.style.display = "inherit";
toDisplayUserPhone.style.display = "inherit";
toDisplayUserName.style.background = "ghostwhite";
toDisplayUserPhone.style.background = "ghostwhite";
editUser.style.display = "inherit";
removeUser.style.display = "inherit";
let storing = document.getElementById('registeredName' && 'registeredPhone');
storing.textContent = nameFieldType.value && phoneFieldType.value;
// reset på nameFieldType & phoneFieldType //
nameFieldType.value = "";
phoneFieldType.value = ""; 
errorMessage.style.display = "none";
}
else
{
errorMessage.style.display = "inherit";
errorMessage.style.color = "red";
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
nameField.style.background = "inherit";
phoneField.style.background = "inherit";
editButton.innerText = "Spara";
} 
else 
{
// redigering av knapp //
nameField.readOnly = true;
phoneField.readOnly = true;
nameField.style.background = "ghostwhite";
phoneField.style.background = "ghostwhite";
editButton.innerText = "Ändra";
}
}


// raderings knapp //
function removeUser() 
{    
let removeEditButton = document.getElementById('ändra');
let removeUser = document.getElementById('radera');
let removeUserName = document.getElementById('registeredName');
let removeUserPhone = document.getElementById('registeredPhone');
if (removeUser)
{
removeEditButton.style.display = "none";
removeUser.style.display = "none";
removeUserName.style.display = "none";
removeUserPhone.style.display = "none";
}
}


// input fält (namn/alias + telefon nr) & skapa knapp //
function registerUser() 
{

let nameFieldType = document.getElementById('nameFieldType');
let phoneFieldType = document.getElementById('phoneFieldType');
let toDisplayUserName = document.getElementById('registeredName');
let toDisplayUserPhone = document.getElementById('registeredPhone');
let editUser = document.getElementById('ändra');
let removeUser = document.getElementById('radera');

if (nameFieldType.value !== "" && phoneFieldType.value !== "")
{
toDisplayUserName.value = nameFieldType.value;
toDisplayUserPhone.value = phoneFieldType.value;
toDisplayUserName.style.display = "inherit";
toDisplayUserPhone.style.display = "inherit";
toDisplayUserName.style.background = "lightgray";
toDisplayUserPhone.style.background = "lightgray"
editUser.style.display = "inherit";
removeUser.style.display = "inherit";
}
{
nameFieldType.value = "";
phoneFieldType.value = "";    
}
}


// redigerings knapp //
function editUser()
{
let editButton = document.getElementById('ändra');

if (editButton)
{
document.getElementById('registeredName').readOnly = false;
document.getElementById('registeredPhone').readOnly = false;
document.getElementById('registeredName').style.background = "white";
document.getElementById('registeredPhone').style.background = "white";
}


}


// raderings knapp //
function removeUser() 
{
let toDisplayUserName = document.getElementById('registeredName')
let toDisplayUserPhone = document.getElementById('registeredPhone')
let removeButton = document.getElementById('ändra')

}


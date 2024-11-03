function registerUser() 
{
let nameFieldType = document.getElementById('nameFieldType');
let telephoneFieldType = document.getElementById('phoneFieldType');
let toDisplayName = document.getElementById('registeredName')
let toDisplayTelephone = document.getElementById('registeredPhone')
let nameText = nameFieldType.value.trim();
let telephoneText = telephoneFieldType.value.trim();

if (nameText !== "") 
{
document.getElementById('registeredName').style.display = 'inherit';
textContent = nameText;
}
if (telephoneText !== "") 
{
document.getElementById('registeredPhone').style.display = 'inherit';
textContent = telephoneText;
}
nameFieldType.value = "";
telephoneFieldType.value = "";
}



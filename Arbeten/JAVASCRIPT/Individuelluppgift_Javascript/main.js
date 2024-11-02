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

let nameListItem = document.createElement('li');
document.getElementById('registeredName').style.display = "block";
nameListItem.textContent = nameText;
toDisplayName.appendChild(nameListItem);

}

if (telephoneText !== "") 

{
let phoneListItem = document.createElement('li');
document.getElementById('registeredPhone').style.display = "block";
phoneListItem.textContent = telephoneText;
toDisplayTelephone.appendChild(phoneListItem);

}

nameFieldType.value = "";
telephoneFieldType.value = "";

}



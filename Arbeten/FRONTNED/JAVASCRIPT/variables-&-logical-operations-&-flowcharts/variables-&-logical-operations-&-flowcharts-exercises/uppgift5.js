/*
Skapa ett program som konverterar celcius till farenheit. 
Användaren ska ge input (numeriska värden) i celcius som programmet 
sedan ska konvertera till farenheit och skriva ut det som en popup.

Börja med att göra en flowchart och översätt denna sedan till pseudokod. Parprogrammering 
uppmuntras för att bolla tankar.
*/

/***
Inmatning av numeriskt värde för celcius, om besvarat >
konvertera till farenheit.
Ge svar
*/




var celcius = console.log = prompt("Ge ett numeriskt värde för Celcius, vilket kommer sedan konverteras till Fahrenheit:")

function celciusToFahrenheit(celcius) {
const fahrenheit = celcius * 9/5 + 32;
return fahrenheit;
}
const n = 32
alert(celciusToFahrenheit(celcius));

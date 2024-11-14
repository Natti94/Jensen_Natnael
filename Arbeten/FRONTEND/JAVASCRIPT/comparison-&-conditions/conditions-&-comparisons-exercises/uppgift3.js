/*
Skapa ett program som låter användaren välja en form genom att skriva in circle/rectangle/triangle. 
Programmet ska baserat på användarens val be om input för att beräkna den valda formens area. 
När användaren fått svara med den data som behövs ska en uträkning på arean ska och programmet skriver ut resultatet 

Gör en flowchart och sedan skriva pseudokod innan ni börjar koda.
*/

/*** 
PSEUDOKOD
VÄLJ FORM:
"CIRKEL"
"REKTANGEL"
"TRIANGEL"
KALKULERA FORM:
"NUMERISKT VÄRDE"
*/


var shape = prompt("choose a form of either by typing > circle, rectangle or triangle:")

if (shape == "circle")
{
var inputRadius = parseFloat(prompt("enter the value of radius i.e. [x * x]:"));
var area = Math.PI * Math.pow(inputRadius, 2);
console.log("result of the form's area: " + area);
}

if (shape == "rectangle")
{
var inputWidth = parseFloat(prompt("enter the value of width:")); 
var inputHeight = parseFloat(prompt("enter the value of height:")); 
var area = inputWidth * inputHeight;
console.log("result of the form's width + height: " + area);
}

if
(shape == "triangle") 
{
var inputBase = parseFloat(prompt("enter the value of base:"));
var inputHeight = parseFloat(prompt("enter the value of height:"));
var area = 0.5 * inputBase * inputHeight;
console.log("result of the form's base + height: " + area);
}

else
(
alert("incorrect input.")
)
        


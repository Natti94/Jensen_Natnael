/*
Med den kunskap ni fått från föregående 9 uppgifter, skapa spelet sten/sax/påse som kan spelas mot datorn. 
Spela det verkliga spelet med en vän för att se hur processen går till. 
Översätt sedan detta till pseudokod eller en flowchart innan ni börjar programmera. 
Kom ihåg att bryta ner problemet i flera moduler och få dessa att funka separat.

Parprogrammering uppmuntras. Använd er av tekniker från tidigare uppgifter för att lösa denna uppgift.
*/

/***
PSEUDOKOD

spelare 1,
INPUT: VÄLJER "STEN, SAX ELLER PÅSE"
spelare 2,
INPUT: VÄLJER "STEN, SAX ELLER PÅSE"
PROCESS: VEM FICK "STEN, SAX ELLER PÅSE"
WINNER: "spelare 1 ELLER spelare 2"
 */

var spelare1 = "spelare 1"
var spelare2 = "spelare 2"
var sten = "sten"
var sax = "sax"
var påse = "påse"

var gameOn = function()

{

spelare1 = prompt(spelare1 + " välj sten, sax eller påse.")
spelare2 = prompt(spelare2 + " välj sten, sax eller påse.")


if (spelare1 == sten & spelare2 == sten)
{
alert("båda fick sten.")
return;
}

if (spelare1 == sax & spelare2 == sax)
{
alert("båda fick sax.")
return;
}

if (spelare1 == påse & spelare2 == påse)
{
alert("båda fick påse.")
return;
}


if (spelare1 == påse & spelare2 == sten)
{
alert("spelare 1 vann.")
return;
}
if (spelare1 == sten & spelare2 == påse)
{
alert("spelare 2 vann.")
return;
}


if (spelare1 == sax & spelare2 == påse)
{
alert("spelare 1 vann.")
return;
}
if (spelare1 == påse & spelare2 == sax)
{
alert("spelare 2 vann.")
return;
}
    
if (spelare1 == sten & spelare2 == sax)
{
alert("spelare 1 vann.")
return;
}

if (spelare1 == sax & spelare2 == sten)
{
alert("spelare 2 vann.")
return;
}
    

} 

gameOn();



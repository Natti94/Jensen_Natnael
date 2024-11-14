/*
 * Element selectors
 */

console.log('******************** getElementById ****************************');

let myTitle = document.getElementById('title');
console.log(myTitle);
myTitle.innerHTML = '<i>Some dummy title</i>'; // innerHTML renders HTML tags
// myTitle.innerText = '<i>Some dummy title</i>';    // innerText displays HTML tags as content

console.log(myTitle.innerHTML); // display the innerHTML


console.log('******************** getElementsByClassName ****************************');
// getElementsByClassName
// returns HTMLCollection
// Similar to an array, having the elements indexed and even have propertis such as .length
// Read more here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection

let boxes = document.getElementsByClassName('box');
console.log(boxes);
console.log(boxes[2]);
console.log(boxes.length);

for (let i = 0; i < boxes.length; i++) {
    console.log(boxes[i]);
    
    boxes[i].style.margin = "5px";
    // boxes[i].style.backgroundColor = "skyblue";
}

console.log('******************** getElementsByTagName ****************************');
// getElementsByTagName
// returns HTMLCollection
// Similar to an array, having the elements indexed and even have propertis such as .length
// Read more here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection

let divElements = document.getElementsByTagName('div');
console.log(divElements);
console.log(divElements[2]);
console.log(divElements.length);

for (let i = 0; i < divElements.length; i++) {
    console.log(divElements[i]);
    
    divElements[i].style.borderRadius = "50%";
}


console.log('******************** querySelector ****************************');

let section = document.querySelector('main#content section.box');
console.log(section);
section.style.backgroundColor = "orange";


console.log('******************** querySelectorAll ****************************');
// querySelectorAll
// returns NodeList
// Similar to an array, having the elements indexed and even have propertis such as .length
// Read more here: https://developer.mozilla.org/en-US/docs/Web/API/NodeList

divElements = document.querySelectorAll('div.box');
console.log(divElements);



/*
 * Handle element attributes
 */
console.log('******************** HTML attributes ****************************');
let myLink = document.getElementById('link');
console.log(myLink.href); // Displayes the value of the href-attrbute
myLink.href = '###'; // Manipulates the value of the href-attrbute
console.log(myLink.href); // Displayes the value of the href-attrbute

// Another ways of Adding/changing an attribute is with the method "setAttribute(name, value)"
myLink.setAttribute('target', '_blank');

/*
 * Handle events
 * Some events: click | mouseover | keypress
 */
console.log('******************** Handle events ****************************');
myLink = document.getElementById('link');
myLink.addEventListener('click', function(event) {
    // preventDefault prevents the default behavior of the element
    // In this case the prevented default behavior of the link is to open a new window.
    event.preventDefault();
    // myLink.classList.toggle('hide'); // Toggle does the folllowing: IF (.hide exists) {remove it} ELSE {add .hide}

    alert('You just pressed the link');
});


// Example 2
// let thirdCircle = document.querySelectorAll('div.box')[2]
// console.log(thirdCircle);

let thirdCircle = document.querySelector('#content .box:nth-child(3)')
console.log(thirdCircle);
thirdCircle.addEventListener('mouseover', alertOnMouseOver);
function alertOnMouseOver() {
    alert('You just hoovered over the third circle');
}


/*
 * Navigation
 */
console.log('******************** Navigation ****************************');

let main = document.getElementById('content');
console.log(main);
console.log(main.children);     // Array with index
console.log(main.children[2]);  // Third child
console.log(main.firstElementChild);
console.log(main.lastElementChild);
console.log(main.parentNode);
console.log(main.previousElementSibling);
console.log(main.nextElementSibling);

// Target the first circle
main.firstElementChild.innerText = 'First circle';
// Target the link-text in last child
main.lastElementChild.firstElementChild.innerText += ' :)';
// Target the fifth circle, add some text
main.children[4].innerText = 'fifth circle';
// Target the main headline and add a smiley at the end :)
main.previousElementSibling.innerText += ' :)';



/*
 * Add/Create/Delete element
 */
console.log('******************** Add/Create/Delete element ****************************');

main = document.getElementById('content');

for (let i = 1; i <= 5; i++) {
    // Create element
    let newBox = document.createElement("section");
    // Add some text
    newBox.innerText = "Box " + i;
    // Add a class
    newBox.classList.add('box');
    // Add some style
    newBox.style.margin = '5px';
    console.log(newBox);

    newBox.style.backgroundColor = 'lightgreen';

    newBox.addEventListener('click', function() {
        // newBox.remove(); // Removes the element
        
        // this refers to the object newBox
        this.remove(); // Removes the element

        // this.parentNode.remove(); // Removes the parent element
    })

    // Place the new element in the HTML document somewhere :)
    main.appendChild(newBox);
}




console.log('******************** Övningar: DOM och events ****************************');


/*
 * Övningar: DOM och events
 */

/* 
1)

Ändra titlen högst upp till, 'Learning how to handle JS DOM and events'
Använd getElementById och innerHTML
*/





/* 
2)

Ersätt cirklarnas CSS klass .box med .green-box
Googla hur man tar bort/lägger till klasser på element, med JS.

Använd getElementsByTagName för att först hämta alla element, samt for-loop för att ersätta alla klasser
*/




/* 
3)

Cirklarnas height och width satt till 100px, via CSS klassen .green-box.
Ändra cirklarnas height och width till 120px.
Googla hur man ändrar ett elements höjd och bredd i JS.

Använd getElementsByClassName för att först hämta alla element, samt for-loop för att göra ändringen

*/





/* 
4)

Ge box 5 en orange border.

Använd querySelector för att först hämta elementet
*/





/* 
5)

Lägg till en ny länk 'My second link :)' i den beiga boxen

Använd getElementById för att hämta den beiga boxen
Använd createElement för att skapa den nya länken
Använd appendChild för att lägga till länken till den beiga boxen
*/



/* 
6)

Lägg till attributet href med värdet '#####', till den nya länken
Lägg till attributet target med värdet _blank' till den nya länken

Använd setAttribute för att lägga till de nya attributen
*/



/* 
7)

Lägg till en ny img-tagg (bild) i main#content

Lägg till attributet src med ett frivilligt värdet
Lägg till attributet width med värdet 100
Lägg till attributet height med värdet 100
*/




/* 
8)

Lägg till en eventlistener 'mouseover' på din bild, som skriver ut en text via alert();
*/





/* 
9)

Lägg till en eventlistener på din länk från övning 5, som skall radera allt innehåll i den beiga boxen

Använd DOM navigeringen mySecondLink.parentNode för att hämta beiga boxen, som då är förälder till länken.
*/






/* 
10)

Skapa en ny section
Lägg till en border till den nyskapta sektionen
Justera sektionens height till 100px
Justera sektionens width till 200px

Skapa 2 st buttons med texten
- "Green"
- "Blue"

Lägg till eventlistener på alla 2 knappar, som justerar den nyskapta sektionens bakgrundsfärg
Knappen "Green" ändrar bakgrundsfärgen till grön osv.

Lägg alla 2 knappar innanför sektionen
Lägg till sektionen i main#content
*/


console.log("########## if-statement ############");

if (true) {
  console.log('Exekvera koden i if-blocket')
}


if (false) {
  console.log('Kommer aldrig exekvera koden i if-blocket')
}


console.log('Hej klassen');
console.log('Hej klassen');
console.log('Hej klassen');
console.log('Hej klassen');
console.log('Hej klassen');


/*
Similar to an if-statement, 
while-loops use conditions and will execute the code as long as the condition is true

Important to keep changing the value of the condition, so that eventueally tha condition will be false,  and the loop breaks.
OR else we will be stuck in an infinity-loop

while (condition) {
  // code block to be executed
}
*/
console.log("########## while-loop with decrement ############");

let counter = 5;
while (counter > 0) {
  console.log('Hej klassen');
  console.log(`Counter: ${counter}`)

  // Three ways to decrement counter with 1
  // counter = counter - 1;
  // counter -= 1;
  counter--;
}

console.log("########## while-loop with increment ############");
counter = 0;
while (counter < 5) {
  console.log('Hej klassen');
  console.log(`Counter: ${counter}`)

  // Three ways to increment counter with 1
  // counter = counter + 1;
  // counter += 1;
  counter++;
}




// Make a guessing game with a while loop

// Random number 1-100
// const randomNumber = Math.ceil(Math.random() * 100) + 1 // datatype =  number
// let userGuess = prompt('Gissa det rätta numret 1-100') // alwase returns datatype = string

// while(userGuess != randomNumber) {
//   if (userGuess < randomNumber) {
//     userGuess = prompt('För lågt, gissa igen.')
//   } else {
//     userGuess = prompt('För högt, gissa igen.')
//   }
// }

// alert('Grattis, du gissade rätt')

/*
    for (statement 1; statement 2; statement 3) {
    // code block to be executed
    }

    Statement 1 
    is executed (one time) before the execution of the code block.
    sets a variable before the loop starts (let i = 0).

    Statement 2 
    defines the condition for executing the code block.
    defines the condition for the loop to run (i must be less than 5).

    Statement 3 
    is executed (every time) after the code block has been executed.
    increases a value (i++) each time the code block in the loop has been executed.
*/
console.log("########## for-loop with increment ############");

for (let i = 0; i < 5; i++) {
  console.log("Hej klassen");
  console.log("Counter: " + i);
}

console.log("########## for-loop with decrement by 2 ############");
console.log()
for (let i = 10; i > 0; i -= 2) {
  console.log("Hej klassen");
  console.log("Counter: " + i);
}

/*
    If you know the loop count
    Then the for loop is more suiteable

    if you don't know the loop count
    Then the while loop is more suiteable
    Example:
        - Loop untill the user has guessed right, in a guesssing game
        - Loop as long as the password is wrong, in a login app
*/





console.log("########## Break a loop ############");

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // breaks the loop
  }

  console.log(i)
}


console.log("########## Continue a loop ############");

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // jumps to the next loop 
  }

  console.log(i)
}



/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

Similar to an if-statement

- Use switch if you are checking one variable, and need to alter a value depending on different states of that variable
- Use if-statements if need to only check one state of condition, OR when you need to check multiple conditions
*/

console.log('########### switch ###########');

let day = '';
let dayIndex = new Date().getDay(); // returns 0-6, from sunday-saturday
let error = "";


switch(dayIndex) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
  default: 
    error = "Invalid dayIndex. Only 0-6 are valid indexes"
}

if (error) {
  console.log(error)
} else {
  console.log(`Today is ${day}`);
}

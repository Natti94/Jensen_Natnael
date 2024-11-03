// This is a comment

/*
    This is a 
    multiline comment
*/

// JS Datatypes
// Primitive values
console.log("############## JS Datatypes ##########");
console.log(typeof(42));                              // Number 
console.log(typeof(4.2));                             // Number 
console.log(typeof(0));                               // Number 

console.log(typeof("Hello World"));                   // String 
console.log(typeof('Hello World'));                   // String 
console.log(typeof('42'));                            // String 
console.log(typeof(''));                              // String 

console.log(typeof(true));                            // Boolean
console.log(typeof(false));                           // Boolean

console.log(typeof(null));                            // Object, when a variable is declared and is assigned an "empty" value
console.log(typeof(undefined));                       // Undefined, when a variable is declared BUT is not assigned a value

// Non-primitive values
console.log(typeof([1, 2, 3, 'string', true, null]));       // Array object
console.log(typeof({firstname: 'John', lastname: 'Doe'}));  // Object


/**
 * What is a variable?
 * It's a container that holds a value
 * 
 * Can be declared with the keywords 'var', 'let' and 'const'
 * The difference between the variable declarations will be explained further later in the course
 */
 console.log("############## Variables ##########");
var numb1 = 1;
// var numb1 = 1;      // Allowed to re-declare a variable with 'var'

let numb2 = 2;
//let numb2 = 2;    // NOT allowed to re-declare a variable with 'let'

let numb3 = 3.14159;

let text1 = "Jag har 5 decimaler på PI";
let text2 = "Svaret om allt i universum";


// Logical operators =, +, - , /, *
console.log('############ Logical operators ##########');
let addition          = numb1 + numb2;       // 3
let subtraction       = numb1 - numb2;       // -1
let division          = numb1 / numb2;       // 0.5
let multiplication    = numb1 * numb2;       // 2

console.log(addition);
console.log(subtraction);
console.log(division);
console.log(multiplication);


// '=' assignment operator
// '==' equal value (comparision operator)

// += add on current value
// -= subtract on current value
// /= divide on current value
// *= multiply on current value
console.log("############ Logical operators with assignment '=' ##########");
let x = 5;
console.log(x);         // 5
x += 6;                 // same as 5 + 6
console.log(x);         // 11
x -= 1;                 // same as 11 - 1
console.log(x);         // 10
x /= 2;                 // same as 10 / 2
console.log(x);         // 5
x *= 10;                // same as 5 * 10
console.log(x);         // 50


console.log("############ Modulus % ##########");
console.log(9 % 1)      // 0
console.log(9 % 3)      // 0
console.log(9 % 9)      // 0

console.log(9 % 2)      // 1
console.log(9 % 4)      // 1

console.log(9 % 5)      // 4



// Concatenate strings with the keyword '+'
console.log("############ Concatenate strings with '+' ##########");
console.log("Hello " + "World");

let string = "Hello " + "World " + "Wide " + "Web";
console.log(string);

// Concatenate strings with the keyword '+='
console.log("############ Concatenate strings with '+=' ##########");

console.log(string);       // Hello World Wide Web
string = "Hello";          // Re-assign to "Hello"
console.log(string);       // Hello
string += " World";
console.log(string);       // Hello World
string += " Wide";
console.log(string);       // Hello World Wide
string += " Web";
console.log(string);       // Hello World Wide Web


// Concatenate with string literals
console.log("############ Concatenate with string literals ##########");
let word1 = "Hello";
let word2 = "World";
let word3 = "Wide";
let word4 = "Web";

// Concatenating with the keyword '+', can make things abit awkward sometimes
string = word1 + " " + word2 + " " + word3 + " " + word4;
console.log(string);

// May solve the above with string literals, without breaking up the string. Much easier then the above example.
string = `${word1} ${word2} ${word3} ${word4}`;
console.log(string);


// Concatenate strings and numbers with '+'
console.log("########## Concatenate strings and numbers with '+' ###########");
console.log(3 + 2);             // 5     
console.log('3' + '2');         // 32     
console.log('3' + 2);           // 32     
console.log(3 + 2 + '1' + 1 + 1 + 1 + 1);   // 511111  


console.log("######## alert(), prompt(), and if-statement");


// Built-in JS functions
// prompt() is a popup that asks the end-user for data/information
// alert() is a popup that displays information for the end-user


let username = prompt('Hej, vad heter du?');
console.log(username);

if (username == 'John') {
    // if the condition is true, then execute the code inside of this block
    alert(`Welcome ${username}`);
}
// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======



//create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable
let chars = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    '#', '@', '&', '%', '!', '$', '%', '^', '*', '(', ')', '-', '_', '+', '='
];
// create a global variable called "pwLength" with a number between 10 and 18
//1st step: Math.random will give me a pseudo-random number between 0 and 1. 2nd step: Subtract maximum number(18) to minimum number(10) and then add 1. 3rd step: multiply Math.random result to the 2nd step result. 4th step: add 10. We need to add 10 to make sure that the result will always have minimum of 10. 5th step: Math.floor will return the largest integer of the result and not include decimals. This will generate numbers between 10 to 18. 
const pwLength = Math.floor(Math.random() * (18 - 10 + 1) + 10);

// Using the chars array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function

function addNewPassword() { //create an "addNewPassword" function that will generate random passwords with 10 to 18 characters
    let password = ""; //inside the function, create a "password" variable with empty string value.
    for (let i = 0; i < pwLength; i++) { //create a "for" loop that will generate the string value of the "password" variable. Let iteration start at 0; iteration will run as long as it's less than "pwLength"; iterate one at a time. The "for" loop properties will run until the "i < pwLength" condition is met.
        let randomNumber = Math.floor(Math.random() * chars.length); // Multiply the result of Math.random to the returned number of elements in the "chars" array. Math.floor will return the largest integer of the result and not include decimals. Assign that result to the "randomNumber" variable
        password += chars[randomNumber] // Make the value of "randomNumber" the index of "chars" variable. Then add this to the "password" string value.
    }
    return password; //return the "password" variable, now with the value of "chars[randomNumber]" 
};

// console.log(addNewPassword());
//console.log(pwLength);


// ## Bonus instructions
// 1. Add an alert asking the character limit the user would like to use with a limit of 50 or under. 
// 2. The alert should print the randomized password with the length specified by the user.

// ## Bonus Acceptance Critera
// 1. Must start with an alert requiring a character limit of 50 or under with input from user.
// 2. If the user inputs over 50 characters, then there must be a second alert giving an error message.
// 3. The alert should start over asking th euser to input their character limit after the error message.
// 4. Number of characters in returned randomized password must reflect the length specified by user.




function popUpTest() {
    let log = console.log;
    log(parseInt(popUpMessage));
    let popUpMessage = prompt("Please enter the number of Password you prefer. Minimum of 10. Maximum of 50", "");
    if (popUpMessage <= 10) {
        alert("Password invalid");
    } else if (popUpMessage > 50) {
        alert("Error. Please enter a number minimum of 50.");
    } else if (popUpMessage <= 50) {
        alert("password valid")
    } else {
        alert("Please try again")
    } //this code is unfinished. Must work on it!
};
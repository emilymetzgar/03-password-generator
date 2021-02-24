

// Function to prompt user for password options
function getPasswordOptions () {
// Variable to store length of password from user input
var pwLength = window.prompt("How many total characters would you like your password to be?", 'min 8 max 128');

// Conditional statement to check if password length is a number. Prompts end if this evaluates false
if (isNaN(pwLength) === true) {
alert("Password length must be provided as a number");
return;
}

// Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false  
// Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false

var pwLength = window.prompt("How many total characters would you like your password to be?", 'min 8 max 128');
if (pwLength < 8 || pwLength> 128){
  alert('Password length must be bewtween 8 and 128 characters in length');
  return;
}


// Variables to store booleans regarding the inclusion of types of characters
var useUppercase = window.prompt("Incdlue uppercase letters?");
var useLowercase = window.prompt("Include lowercase letters?");
var useNumbers = window.prompt("Include numbers?");
var useSpecial = window.prompt("Include special characters?");

 // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
if (!useUppercase && !useLowercase && !useNumbers && !useSpecial){
  alert("User must select at least one character type");
  return;
}

// Object to store user input variables
var getPwOptions = {
  useUppercase: window.prompt("Incdlue uppercase letters?"),
  useLowercase: window.prompt("Include lowercase letters?"),
  useNumbers: window.prompt("Include numbers?"),
  useSpecial: window.prompt("Include special characters?"),
};
return getPwOptions;
}


// Function for getting a random element from an array
function getRandomLower() {
  var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  return lower[Math.floor(Math.random() * symbols.length)];
}
// Function for getting a random element from an array
function getRandomUpper() {
  var upper =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
  return upper[Math.floor(Math.random() * upper.length)];
}
// Function for getting a random element from an array
function getRandomSpecial() {
  var special = ['!', '@', '#', '$', '%', '^', '&', '*', '~', '?'];
  return special[Math.floor(Math.random() * special.length)];
}
// Function for getting a random element from an array
function getRandomNumbers () {
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  return numbers[Math.floor(Math.random() *numbers.length)];
}


// Function to generate password with user input 
function generatePassword() {

}

var options = getPwOptions();
// Array to store password as it's being concatenated 
var result = ;

// Array to store types of characters to include in password
var possibleCharacters = [];

// Array to contain one of each type of chosen character to ensure each will be used
var guaranteedCharacters = [];

// Conditional statement that adds array of special characters into array of possible characters based on user input
// Push new random special character to guaranteedCharacters to make at least one of the value is always included 
  if (options.useSpecial) {
//add a new random special character to the guaranteedCharacters array
getRandomSpecial,
//add the entire special characters array into the possibleCharacters array
guaranteedCharacters.push(getRandomSpecial)
  }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters to make at least one of the value is always included 
  if (options.useNumbers) {
  //add a new random number to the guaranteedCharacters array
  getRandomNumbers

  //add the entire numbers array to the possibleCharacters array
  guaranteedCharacters.push(getRandomNumbers)

  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters to make at least one of the value is always included 
  if (options.useLowercase) {
  //add a new random lowercase letter to the guaranteedCharacters array
  getRandomLower
  
  //add the entire lowercase letters array to the possibleCharacters array
  guaranteedCharacters.push(getRandomLower)

  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters to make at least one of the value is always included 
  if (options.useUppercase) {
  //add a new random uppercase letter to the guaranteedCharacters array 
  getRandomUpper

  //add the entire uppercase letters array to the possibleCharacters array
  guaranteedCharacters.push(getRandomUpper)

  }

  // For loop to iterate over the password length provided from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.; i++) {
    var possibleCharacter = getRandomElement(possibleCharacters);
  }

  // For loop to iterate the guarenteed characters to overwrite the generated characters


  // Join the array to make it a singular string to return 
  return 
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // Runs the function that will generate the password
  var password = generatePassword();
  // Selects on the HTML where the password is shown
  var passwordText = document.querySelector('#password');
  // Makes the value of the element the string generated from the generatePassword function
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

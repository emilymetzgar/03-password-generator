//arrays to store characters to be randomly accessed

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '~', '?'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

//function to prompt user for user input to get password options
function getPasswordOptions() {

  // Variable to store length of password from user input
  var length = parseInt(
    window.prompt("How many total characters would you like your password to be?"));

  // Conditional statement to check if pw length is a number
  if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return;
  }
  // Condtional statement to check if password length is at least 8 characters
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  // Condtional statement to check if password length is no more than 128 characters
  if (length > 128) {
    alert('Password length must be less than 129 characters');
    return;
  }

  //confirm messages to prompt user
  var useSpecial = window.confirm("Click OK to include special characters");
  var useNumbers = window.confirm("Click OK to include numbers");
  var useLowercase = window.confirm("Click OK to include lowercase letters");
  var useUppercase = window.confirm("Click OK to include uppercase lettters");

  //object to store user input
  var passwordOptions = {
    length: length,
    useSpecial: useSpecial,
    useNumbers: useNumbers,
    useLowercase: useLowercase,
    useUppercase: useUppercase,
  };
  //return object
  return passwordOptions;
}


// Function for getting a random element from an array
function getRandomElement(characterArrays) {
  var randomIndex = Math.floor(Math.random() * characterArrays.length);
  var randomElement = characterArrays[Math.floor(Math.random() * randomIndex)];
  return randomElement;
}
// Function to generate password with user input 
function generatePassword() {

  var options = getPasswordOptions();

  // Array to store password as it's being concatenated 
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

// Conditional statement that adds array of special characters into array of possible characters based on user input
  if (options.useSpecial) {
    possibleCharacters = possibleCharacters.concat(special);
  }

  // Conditional statement that adds array of numbers characters into array of possible characters based on user input
  if (options.useNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  if (options.useLowercase) {
    possibleCharacters = possibleCharacters.concat(lower);
  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  if (options.useUppercase) {
    possibleCharacters = possibleCharacters.concat(upper);
  }

  // For loop to grab a random character from list of possible characters
  for (var i = 0; i < options.length; i++) {
    var possibleChar = getRandomElement(possibleCharacters);
    result.push(possibleChar);
  }

  // Join the array to make it a singular string to return 
  return result.join('');
}


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

function writePassword() {

  // Runs the function that will generate the password
  var password = generatePassword();

  // Selects on the HTML where the password is shown
  var passwordText = document.querySelector('#password');
  // Makes the value of the element the string generated from the generatePassword function
  passwordText.value = password;
}
//add event listener to button 
generateBtn.addEventListener("click", writePassword);


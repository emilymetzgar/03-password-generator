

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '~', '?'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];


// Function to prompt user for password options
function getPasswordOptions() {
// Variable to store length of password from user input
var pwLength =  window.prompt("How many total characters would you like your password to be?");

// Conditional statement to check if pw length is a number
if (isNaN(pwLength) === true) {
alert("Password length must be provided as a number");
 return;
}
// Condtional statement to check if password length is at least 8 characters
if (pwLength < 8) {
  alert('Password length must be at least 8 characters');
  return;
}

// Condtional statement to check if password length is no more than 128 characters
if (pwLength > 128) {
  alert('Password length must be less than 129 characters');
  return;
}

var useSpecial = window.confirm("Click OK to include special characters");
var useNumbers = window.confirm("Click OK to include numbers");
var useLowercase = window.confirm("Click OK to include lowercase letters");
var useUppercase = window.confirm("Click OK to include uppercase lettters");

var passwordOptions = {

  useSpecial: useSpecial,
  useNumbers: useNumbers,
  useLowercase: useLowercase,
  useUppercase: useUppercase
};

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
  var result = [] ;

  // Array to store types of characters to include in password
  var possibleCharacters = [] ;
  //Array that will hold random guaranteed characters
  var guaranteedCharacters = [] ;

  if (options.useSpecial) {
    possibleCharacters = possibleCharacters.concat(special);
    guaranteedCharacters.push(getRandomElement(special));
  }

  // Conditional statement that adds array of numbers characters into array of possible characters based on user input
  // Push new random numbers character to guaranteedCharacters to make at least one of the value is always included 
  if (options.useNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandomElement(numbers));
    
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lowercase character to guaranteedCharacters to make at least one of the value is always included 
  if (options.useLowercase) {
    possibleCharacters = possibleCharacters.concat(lower);
    guaranteedCharacters.push(getRandomElement(lower));
    
  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random uppercase character to guaranteedCharacters to make at least one of the value is always included 
  if (options.useUppercase) {
    possibleCharacters = possibleCharacters.concat(upper);
    guaranteedCharacters.push(getRandomElement(upper));
    
  }


  // For loop to grab a random character from list of possible characters
  for (var i = 0; i < options.pwLength; i++) {
    var possibleChar = getRandomElement(possibleCharacters);
    result.push(possibleChar);
  }

  // Overwrite the first characters list with guaranteed characters list
  for (i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // Join the array to make it a singular string to return 
  return result.join('');
}


// Get references to the #generate element

generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() { 

// Runs the function that will generate the password
  var password = generatePassword();

// Selects on the HTML where the password is shown
  var passwordText = document.querySelector('#password');
// Makes the value of the element the string generated from the generatePassword function
}
  

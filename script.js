// Assignment Code
//var generateBtn = document.querySelector("#generate");


// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
 //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}
//var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//var upper =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
//var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
//var special = ['!', '@', '#', '$', '%', '^', '&', '*', '~', '?'];

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


//strings/arrays? to be randomly accessed, containing characters by type (upper, lower, number, special)


//pwLength = window.prompt("How many total characters would you like your password to be?", 'min 8 max 128');
//if (isNaN(pwLength)){
 // alert("Password length must be provided as a number");
//}

pwLength = window.prompt("How many total characters would you like your password to be?", 'min 8 max 128');
if (pwLength < 8 || pwLength> 128){
  alert('Password length must be bewtween 8 and 128 characters in length');
}
else {
useUppercase = window.confirm("include upper case letters?");
useLowercase = window.confirm("include lower case letters?");
useNumbers = window.confirm("include numbers?");
useSpecial = window.confirm("include special characters?");
  }


if (!useUppercase && !useLowercase && !useNumbers && !useSpecial){
  alert("User must select at least one character type");
}



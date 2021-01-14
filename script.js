// Dependencies ===============================
// Starting Data ==============================

// Assignment Code
var generateBtn = document.querySelector("#generate");

// User Inputs ================================
function getParameters() {
// ask the user how long they want the password
let passwordLength = prompt("How long would you like your password to be? (Min. 8 Characters)")

// do they want SVGAnimatedNumberList
let includeNumbers = confirm('Would you like to include numbers in your password?')

// do they want lowercase letters
let includeLowerCaseLetters = confirm('Would you like to include lowercase letters in your password?')

// do they want uppercase letters
let includeUpperCaseLetters = confirm('Would you like to include uppercase letters in your password?')

//do they want special characters?
let includeSpecialCharacters = confirm('Would you like to include special characters in your password?')
}


// Functions ==================================

// Write password to the #password input
function writePassword() {
  var password = generatePassword() {

  };
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // return password
  passwordText.placeholder = passwordText.value;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordText = document.querySelector("#password");



// build a character set containing the users choices
// randomly grab characters from the character set
// place the random characters in the password until we have a password at the specified length

// Initialize (run the function that starts everything)
getParameters();
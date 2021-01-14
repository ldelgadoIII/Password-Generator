// Dependencies ===============================

// Starting Data ==============================

// Assignment Code

var generateBtn = document.querySelector("#generate");

// build a character set containing the users choices
const numberList = "0123456789";
const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
const specialCharactersList = " !\"#$%&()*+,~./:;<>=?@[]^_`{}|-'\\";

// User Inputs ================================

// ask the user how long they want the password
let passwordLength = prompt(
  "How long would you like your password to be? (Min. 8 Characters)"
);
passwordLength = parseInt(passwordLength);

// do they want SVGAnimatedNumberList
let includeNumbers = confirm(
  "Would you like to include numbers in your password?"
);

// do they want lowercase letters
let includeLowerCaseLetters = confirm(
  "Would you like to include lowercase letters in your password?"
);

// do they want uppercase letters
let includeUpperCaseLetters = confirm(
  "Would you like to include uppercase letters in your password?"
);

//do they want special characters?
let includeSpecialCharacters = confirm(
  "Would you like to include special characters in your password?"
);

// Functions ==================================
// place the random characters in the password until we have a password at the specified length
for (let i = 0; i < passwordLength; i++) {}

function generatePassword() {
  if (
    includeNumbers &&
    includeLowerCaseLetters &&
    includeUpperCaseLetters &&
    includeSpecialCharacters
  ) {
  } else if (
    includeLowerCaseLetters &&
    includeUpperCaseLetters &&
    includeSpecialCharacters
  ) {
  } else if (
    ncludeNumbers &&
    includeLowerCaseLetters &&
    includeSpecialCharacters
  ) {
  } else if (
    includeNumbers &&
    includeUpperCaseLetters &&
    includeSpecialCharacters
  ) {
  } else if (includeNumbers && includeLowerCaseLetters) {
  } else if (includeLowerCaseLetters && includeUpperCaseLetters) {
  } else if (includeUpperCaseLetters && includeSpecialCharacters) {
  } else if (includeNumbers && includeSpecialCharacters) {
  } else if (includeNumbers && includeUpperCaseLetters) {
  } else if (includeLowerCaseLetters && includeSpecialCharacters) {
  } else if (includeNumbers) {
  } else if (includeLowerCaseLetters) {
  } else if (includeUpperCaseLetters) {
  } else {
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // return password
  passwordText.placeholder = passwordText.value;
}

var passwordText = document.querySelector("#password");

// Initialize =====================================
// getParameters();

// to do ==========================================
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
// randomly grab characters from the character set
// let numChoice = numberList.charAt(
//   Math.floor(Math.random() * numberList.length)
// );
// let uppercaseChoice = uppercaseList.charAt(
//   Math.floor(Math.random() * uppercaseList.length)
// );
// let lowercaseChoice = lowercaseList.charAt(
//   Math.floor(Math.random() * lowercaseList.length)
// );
// let specialChoice = specialCharactersList.charAt(
//   Math.floor(Math.random() * specialCharactersList.length)
// );

// debugging =======================================

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

function getParameters() {
  // ask the user how long they want the password
  let passwordLength = prompt(
    "How long would you like your password to be? (Min. 8 Characters)"
  );

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
}

// Functions ==================================
function generatePassword() {
  let numChoice = numberList.charAt(
    Math.floor(Math.random() * numberList.length)
  );
  let uppercaseChoice = uppercaseList.charAt(
    Math.floor(Math.random() * uppercaseList.length)
  );
  let lowercaseChoice = lowercaseList.charAt(
    Math.floor(Math.random() * lowercaseList.length)
  );
  let specialChoice = specialCharactersList.charAt(
    Math.floor(Math.random() * specialCharactersList.length)
  );
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
// randomly grab characters from the character set
//let compChoice = compChoices.charAt(Math.floor(Math.random() * 3));
// place the random characters in the password until we have a password at the specified length
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

// debugging =======================================
generatePassword();

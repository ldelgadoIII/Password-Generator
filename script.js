// Dependencies ===============================
// Starting Data ==============================

// Assignment Code

var generateBtn = document.querySelector("#generate");

// build a character set containing the users choices
const numberList = "0123456789";
const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
const specialCharactersList = " !\"#$%&()*+,~./:;<>=?@[]^_`{}|-'\\";

let newPassword = "";
let fullString = "";

// Functions ==================================
function generatePassword() {
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

  // a section to concatinate based on user inputs
  if (includeNumbers) {
    fullString += numberList;
  }
  if (includeLowerCaseLetters) {
    fullString += uppercaseList;
  }
  if (includeUpperCaseLetters) {
    fullString += lowercaseList;
  }
  if (includeSpecialCharacters) {
    fullString += specialCharactersList;
  }

  // section that randomly grabs characters from the concatinated full string
  for (let i = 0; i < passwordLength; i++) {
    newPassword += fullString.charAt(
      Math.floor(Math.random() * fullString.length)
    );
  }
  return newPassword;
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
// writePassword();

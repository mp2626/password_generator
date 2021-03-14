
// Assignment Code
var specialChars = ["@", "}", "{", "~", " !", "_", "*", "?",]
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var alphabetLaw = []
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function getNumber(max) {
  let num = Math.floor(Math.random() * max)
  return num
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate pw for write password
function generatePassword() {
  var userPasswordLength = parseInt(window.prompt("Please select a number between 8 - 128 characters"))

  // check for valid input (number)
  if (isNaN(userPasswordLength) || userPasswordLength < 8 || userPasswordLength > 128) {
    alert("That was not a valid input. Please select a number between 8 - 128")
    generatePassword()
  } else {
    // prompt for criteria (lowercase, uppercase, numeric, and/or special characters)
    var lowerCase = confirm("Do you want your password to have lowercase characters include?");
    var upperCase = confirm("Do you want your password to have uppercase characters include?");
    var numeric = confirm("Do you want your password to have numeric characters include?");
    var specialCharacters = confirm("Do you want your password to have special characters include?");

    // how to spread the numbers evenly between the requirements (set divisible by based on number of true) if true ++ to count ect
    var countLength = userPasswordLength
    var password = ""
    // while loop, is true random generator and -1 from count

    while (countLength != 0) {

      if (lowerCase === true && countLength != 0) {
        let arrayNumber = getNumber(26);
        password += alphabet[arrayNumber];
        countLength--;
        arrayNumber = "";
        alert(password)
      }
      if (upperCase === true && countLength != 0) {
        let arrayNumber = getNumber(26);
        password += alphabet[arrayNumber].toUpperCase();
        countLength--;
        arrayNumber = "";
        alert(password)
      }
      if (numeric === true && countLength != 0) {
        let arrayNumber = getNumber(9);
        password += arrayNumber;
        countLength--;
        arrayNumber = "";
        alert(password)
      }
      if (numeric === true && countLength != 0) {

      }

      // Math.floor(Math.random() * 9) + 1;
      // randomly allocate number of characters base on total length of pw requested


      // bring it all together 


    }
  }
}
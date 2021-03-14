
// Array to that will be accessed to generate pw
const specialChars = ["@", "}", "{", "~", "!", "_", "*", "?",]
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Locates the button in the index html by ID and assigns to a variable for us later
var generateBtn = document.querySelector("#generate");

// Writes password to the #password once the password has been generated
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generates random number with in the max number argument provide by the user
function getNumber(max) {
  let num = Math.floor(Math.random() * max)
  return num
}

// Once the password has been generated this shuffles password
//  Required as the PW generation follows a set patten during creation
function shuffleWord(word) {
  var shuffledWord = '';
  word = word.split('');
  while (word.length > 0) {
    shuffledWord += word.splice(word.length * Math.random() << 0, 1);
  }
  return shuffledWord;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Asks user for password length between 8 - 128
function generatePassword() {
  var userPasswordLength = parseInt(window.prompt("Please select a number between 8 - 128 characters"))

  // Checks for valid input, is a number and between 8 -128
  // If not, calls the generatePassword again
  if (isNaN(userPasswordLength) || userPasswordLength < 8 || userPasswordLength > 128) {
    alert("That was not a valid input. Please select a number between 8 - 128")
    generatePassword()
  } else {
    // prompt for criteria for user PW requirements (lowercase, uppercase, numeric, and/or special characters)
    var lowerCase = confirm("Do you want your password to have lowercase characters include?");
    var upperCase = confirm("Do you want your password to have uppercase characters include?");
    var numeric = confirm("Do you want your password to have numeric characters include?");
    var specialCharacters = confirm("Do you want your password to have special characters include?");

    // var inputCheck = 0
    // if (lowerCase == true) {
    //     inputCheck ++
    // }
    // if (upperCase == true) {
    //     inputCheck ++
    // }
    // if (numeric == true) {
    //     inputCheck ++
    // }
    // if (specialCharacters == true) {
    //     inputCheck ++
    // }



    // sets variables for loop count and password capture
    var countLength = userPasswordLength
    var password = ""

    // Based on user requirements, runs through loop and builds password
    // While Loop - checks to confirm that count length has not reached 0
    // if block reduce count number to prevent a PW being generated outside of user requirements
    while (countLength != 0) {
      // if checks to confirm the user would like lowercase in PW
      // if also checks to see if count != 0, (not require for fist if i know)
      if (lowerCase === true && countLength != 0) {
        let arrayNumber = getNumber(26);
        password += alphabet[arrayNumber];
        countLength--;
        arrayNumber = "";
        alert(password)
      }
      // if checks to confirm the user would like lowercase in PW
      // if also checks to see if count != 0, as loop can be entered and count can be 0 after another if is completed
      if (upperCase === true && countLength != 0) {
        // uses getNumber function to select a random number
        let arrayNumber = getNumber(26);
        // selects letter in the alphabet array and adds it to PW, also converts to uppercase
        password += alphabet[arrayNumber].toUpperCase();
        // reduces count by 1 to prevent PW exceeding required length
        countLength--;
        // cleans out var for next loop
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
      if (specialCharacters === true && countLength != 0) {
        let arrayNumber = getNumber(7)
        // selects special char and add it to pw var
        password += specialChars[arrayNumber]
        countLength--;
        arrayNumber = "";
        alert(password)
      }
    }
  }
  // calls shuffleWord function on PW to ensure its more secure
  // PW generation follow the same pattern
  mixedPW = shuffleWord(password)
  // return the PW to the wite PW function so that the pw is provided to the user
  return mixedPW
}
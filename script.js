// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function isLengthInputValid(passwordInputLength) {
  if (password < 8) {
    return false;
  } ///Check if the password length is more than 128
  if (passwordInputLength > 128) {
    return false;
  }
///Check if the password length is between 8 and 128 (inclusive)
  if (passwordInputLength >= 8 && passwordInputLength <= 128) {
    return true;
  }

  return false;
}

// Function to prompt user for password options
function getPasswordOptions() {
  console.log("Get pass options");

  const passwordLength = prompt(
    " how long would you like the password to be? it needs to me a minimum of 8 characters "
  );
  const passwordLengthAsNum = parseInt(passwordLength /*"10"*/, 10);

  if (isLengthInputValid(passwordLengthAsNum)) {
    const isLowercaseinluded = confirm(" do you want to include lowercases characters? ");
    const isUppercaseinluded = confirm(" do you want to include uppercases characters?");
    const isNumericinluded = confirm(" do you want to include numeric characters? ");
    const isSpecialinluded = confirm(" do you want to include special characters?");

    if (
      isLowercaseinluded ||
      isUppercaseinluded ||
      isNumericinluded ||
      isSpecialinluded === true
    ) {
      return {
        passwordLength: passwordLengthAsNum,
        isLowercaseIncluded: isLowercaseinluded,
        isUppercaseIncluded: isUppercaseinluded,
        isNumericIncluded: isNumericinluded,
        isSpecialIncluded: isSpecialinluded,
      };
    } else {
      alert("please choose at least one character type");
      return null;
    }
  } else {
    alert(
      " please input a valid password length which is a between 8 - 128 characters"
    );
    return null;
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  console.log("generate password");
  const options = getPasswordOptions();

  if (options) {
    let finalPassword = "";
    const selectedCharacters = [];

    if (options.isLowercaseIncluded) {
      selectedCharacters.push(...lowerCasedCharacters);
    }

    if (options.isUppercaseIncluded) {
      selectedCharacters.push(...upperCasedCharacters);
    }

    if (options.isNumericIncluded) {
      selectedCharacters.push(...numericCharacters);
    }

    if (options.isSpecialIncluded) {
      selectedCharacters.push(...specialCharacters);
    }

    if (selectedCharacters.length === 0) {
      alert("Please choose at least one character type.");
      return;
    }

    for (let i = 0; i < options.passwordLength; i++) {
      const randomCharacter = getRandom(selectedCharacters);
      finalPassword += randomCharacter;
    }

    alert(`Your new password is: ${finalPassword}`);
  }
}


var generateBtn = document.querySelector("#generate");

if (generateBtn) {
  generateBtn.addEventListener("click", generatePassword);
} else {
  console.error("Cannot find the generate button.");
}
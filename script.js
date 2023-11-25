// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function isLengthInputValid(passwordInputLength) {
  if (password < 8) {
    return false;
  }
  if (passwordInputLength > 128) {
    return false;
  }

  if (passwordInputLength >= 8 && passwordInputLength <= 128) {
    return true;
  }

  return false;
}

// Function to prompt user for password options
function getPasswordOptions() {
  console.log("Get pass options");

  const passwordLength = prompt(
    " how long would you like the password to be? the password needs to me a minimum of 8 charators "
  );
  const passwordLengthAsNum = parseInt(passwordLength /*"10"*/, 10);

  if (isLengthInputValid(passwordLengthAsNum)) {
    //contione
    /* ask 4 questions and then check if the user wants at least one of the options. if they select at least one then contuiene.
  if they dont select any options alert the user and tell the to select at least one option, and then stop.
  */
    const isLowercaseinluded = confirm(" do you want to include lowercase");
    const isUppercaseinluded = confirm(" do you want to include uppercase");
    const isNumericinluded = confirm(" do you want to include numeric");
    const isSpecialinluded = confirm(" do you want to include special char");

    if (
      isLowercaseinluded ||
      isUppercaseinluded ||
      isNumericinluded ||
      isSpecialinluded === true
    ) {
      // cuntione to generate pass based on answers
    } else {
      alert("please chose at least one charater type");
    }
  } else {
    alert(
      " please input valid password lenght which is 8 or more charaters but less than 128"
    );
  }
  console.log(passwordLength);
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


// Function to generate password with user input
function generatePassword() {
  console.log("generate password");
  let finalPassword;
  getPasswordOptions();

  const selectedCharacters = [];

  for (let i = 0; i < passwordLengthAsNum; i++) {
    const randomCharacter = getRandom(selectedCharacters);
    // Append randomCharacter to the final password
}
alert("your new password is: ${finalPassword}");

}

// Get references to the #generate element //function to generste using user input
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

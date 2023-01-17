// Array of special characters to be included in password
let specialCharacters = [
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
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
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
let upperCasedCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {
 
  let length = Number(prompt("Choose your password length between 10-64 characters"))
  let charType = prompt("Choose what characters to include in your password. Type 'uppercase, lowercase, numbers, symbols' to include. ")
  
}

// Function for getting a random element from an array
function getRandom(arr) {
  let retVal = "";
  for (let i = 0; i < length; i++)
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
}
return retVal;

// Function to generate password with user input
function generatePassword(length, charType) {
  let charGen = {
    uppercase: 'upperCasedCharacters',
    lowercase: 'lowerCasedCharacters',
    numbers: 'numericCharacters',
    symbols: 'specialCharacters',
  };



// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password(length, charType);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
}
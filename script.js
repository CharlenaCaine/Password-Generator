// Create variables
var lowercase = [
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
var uppercase = [
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
  "Q",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [
  " ",
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ",",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

//Create random password
var CreatePassword = function () {
  //Define Character Length
  var CharacterLength = window.prompt("Password Length:");
  if (CharacterLength < 8 || CharacterLength > 128) {
    window.alert(
      "ERROR:\nPassword must contain between 8 and 128 characters.\nPlease try again."
    );
    return;
  }

  // Request character types
  var LowerCase = window.confirm("Include lowercase characters?");

  if (LowerCase === true) {
    var Generate1 = lowercase;
  } else {
    Generate1 = [];
  }

  var UpperCase = window.confirm("Include uppercase characters?");

  if (UpperCase === true) {
    var Generate2 = Generate1.concat(uppercase);
  } else {
    Generate2 = Generate1;
  }

  var Numbers = window.confirm("Include Numbers?");

  if (Numbers === true) {
    var Generate3 = Generate2.concat(nums);
  } else {
    Generate3 = Generate2;
  }

  var Special = window.confirm("Include special characters?");

  if (Special === true) {
    var Generate4 = Generate3.concat(special);
  } else {
    Generate4 = Generate3;
  }

  if (
    LowerCase === false &&
    UpperCase === false &&
    Numbers === false &&
    Special === false
  ) {
    window.alert("Please select AT LEAST ONE type of characters");
  }

  // Define variable for the final array after character selection
  var FinalArray = Generate4;

  // Declare variable to contain randomized array
  var GenPass = [];
  // Random character selection
  for (var i = 0; i < CharacterLength; i++) {
    var RandomArray = FinalArray[Math.floor(Math.random() * FinalArray.length)];
    GenPass.push(RandomArray);
  }

  // Turn array into string
  var FinalString = GenPass.join("");

  // Write password to the #password input
  function GeneratePassword() {
    var password = FinalString;
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  GeneratePassword();
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", CreatePassword);

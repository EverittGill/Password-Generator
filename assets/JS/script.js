// Assignment code here
var generateBtn = document.querySelector("#generate");
var characterConfirm; 
var uppercaseConfirm;
var lowercaseConfirm;
var numbersConfirm;
var input;
var choice = [];
var yourPassword = "";

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


// function clearDisplay() {
//   let display = document.querySelector("#password")
//   if (display.innerHTML) {
//     display.innerHTML = "Test"
//   }
//   generatePassword(display.innerHTML)
// }


function generatePassword() {
  console.log("you clicked the button");

  


// 1. prompt the user for the password criteria
      // A. password length is 8 < 128 
var passwordLength = prompt("Please choose a password length between 8 and 128 characters");
console.log("your length is " + passwordLength + " characters long");
  if (!passwordLength) {
     alert("Type a number between 8 and 128 in that box. refresh and try it again");
  }  else if (passwordLength < 8 || passwordLength > 128) {
    input = parseInt(alert("Try again, this time with a number between 8 and 128"));
    return("");
  }  else {
    numbersConfirm = confirm("Will your password contain numbers?");
    characterConfirm = confirm("Will your password contain special characters?");
    lowercaseConfirm = confirm("Will your password contain lower case letters?");
    uppercaseConfirm = confirm("Will your password contain Upper case letters?");
  };

  // if they didn't input any character criteria then this runs
  if (!numbersConfirm && !characterConfirm && !lowercaseConfirm && !uppercaseConfirm) {
    choice = alert("Try again. Please input some criteria for your password this time by clicking OK for yes and CANCEL for no.");
    return("");
    // if they choose to use everything then this will run
  } else if (numbersConfirm && characterConfirm && lowercaseConfirm && uppercaseConfirm) {
      choice = specialCharacters.concat(numbers, lowercaseLetters, uppercaseLetters)

  // else if for 3 positives 
  } else if (numbersConfirm && characterConfirm && uppercaseConfirm) {
      choice = specialCharacters.concat(numbers, uppercaseLetters);
  } else if (numbersConfirm && characterConfirm && lowercaseConfirm) {
      choice = specialCharacters.concat(numbers, lowercaseLetters);
  } else if (numbersConfirm && uppercaseConfirm && lowercaseConfirm) {
      choice = numbers.concat(uppercaseLetters, lowercaseLetters);
  } else if (characterConfirm && lowercaseConfirm && uppercaseConfirm) {
      choice = specialCharacters.concat(lowercaseLetters && uppercaseLetters);
  
// else if for 2 positives
  } else if (numbersConfirm && uppercaseConfirm) {
      choice = numbers.concat(uppercaseLetters);
  } else if (numbersConfirm && lowercaseConfirm) {
      choice = numbers.concat(lowercaseLetters);
  } else if ( numbersConfirm && characterConfirm) {
      choice = numbers.concat(specialCharacters);
  } else if ( uppercaseConfirm && lowercaseConfirm) {
      choice = uppercaseLetters.concat(lowercaseLetters);
  } else if (uppercaseConfirm && characterConfirm) {
      choice = uppercaseLetters.concat(specialCharacters);
  } else if ( lowercaseConfirm && characterConfirm) {
      choice = lowercaseLetters.concat(specialCharacters);

//  else if for 1 positive
  } else if (numbers) {
    choice = numbers;
  } else if (uppercaseConfirm) {
    choice = uppercaseLetters;
  } else if (lowercaseConfirm) {
    choice = lowercaseLetters;
  } else if (characterConfirm) {
    choice = specialCharacters;
};


console.log(choice);
console.log(passwordLength);
for (let i = 0; i < passwordLength; i++) {
  placeholder = choice[Math.floor(Math.random() * choice.length)];
  yourPassword+=placeholder;
  
}


console.log(yourPassword);
return yourPassword;



}








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  yourPassword = ""
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
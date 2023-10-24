var generateBtn = document.querySelector("#generate");

var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "0123456789";
var specialChars = "!@#$%^&*()";

function generatePassword() {

  var password ="";
  var passwordChars ="";
  var passwordLength = prompt("How long would you like your new password to be?");
  var passwordLength = parseInt(passwordLength);

  if (passwordLength < 8) {
    alert("Password must have more than 8 characters!");
    return;
  }

  if (passwordLength > 32) {
    alert("Password must not be more than 32 characters!");
    return;
  }

  var includeLowercase=confirm("Would you like to include lowercase letters?");

  if (includeLowercase) {
    passwordChars += lowercaseChars;
  }

  var includeUppercase=confirm("Would you like to include uppercase letters?");

  if (includeUppercase) {
    passwordChars += uppercaseChars;
  }

  var includeNumbers=confirm("Would you like to include numbers?");

  if (includeNumbers) {
    passwordChars += numberChars;
  }

  var includeSpecialChars=confirm("Would you like to include special characters?");

  if (includeSpecialChars) {
    passwordChars += specialChars;
  }

for(var i=0; i < passwordLength; i++) {
  var randomChar = passwordChars[Math.floor(Math.random()*passwordChars.length)]

  password += randomChar
}

return password;

}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
  }
  
  generateBtn.addEventListener("click", writePassword);
// Assignment code here
function getLength() {
    var input = prompt("Please enter the length of the password");
    if (input == null) {
        return 0;
    }
    var n = parseInt(input, 10);
    while (isNaN(n) || n < 8 || n > 128) {
        input = prompt("Please enter the length, between 8 to 128");
        if (input == null) {
            return 0;
        }
        n = parseInt(input, 10);
    }
    return n
}


const LOWERS = "abcdefghijklmnopqrstuvwxyz";
const UPPERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMS = "0123456789";
const SYMBOLS = "!@#$%^&*_-+=";


function getNCharacters(n, needLower, needUpper, needNum, needSymbol) {
    // store all possible characters into charBank
    let charBank = "";
    // should includ at least one character from each required character types
    let res = []
    if (needLower) {
        charBank += LOWERS;
        res.push(LOWERS.charAt(Math.floor(Math.random() * LOWERS.length)));
        n -= 1;
    }
    if (needUpper) {
        charBank += UPPERS;
        res.push(UPPERS.charAt(Math.floor(Math.random() * UPPERS.length)));
        n -= 1;
    }
    if (needNum) {
        charBank += NUMS;
        res.push(NUMS.charAt(Math.floor(Math.random() * NUMS.length)));
        n -= 1;
    }
    if (needSymbol) {
        charBank += SYMBOLS;
        res.push(SYMBOLS.charAt(Math.floor(Math.random() * SYMBOLS.length)));
        n -= 1;
    }

    for (let i=0; i < n; i++) {
        res.push(charBank.charAt(Math.floor(Math.random() * charBank.length)));
    }
    
    return res;
}


function generatePassword() {
    // prompt user to enter a valid length
    var length = getLength();
    if (!length) {
        return '';
    }

    // comfirm what character types are required
    var needLower = confirm("Should we include lowercase letter(s)?");
    var needUpper = confirm("Should we include uppercase letter(s)?");
    var needNum = confirm("Should we include digit(s)?");
    var needSymbol = confirm("Should we include special character(s)?");
    if (!needLower && !needUpper && !needNum && !needSymbol) {
        alert("We need AT LEAST ONE character type!!!");
        return '';
    }

    // Randomly pick 'length' characters, include at least one character from each required character types
    let charsForPassword = getNCharacters(length, needLower, needUpper, needNum, needSymbol);
    // Randomly pop character from charsForPassword to get a randomized password
    let password = "";
    while (charsForPassword.length != 0) {
        let i = Math.floor(Math.random() * charsForPassword.length);
        password += charsForPassword[i];
        charsForPassword.splice(i, 1);
    }

    return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
const palindromes = function (inputArray) {
    let splitArray = inputArray.split("");
    splitArray = splitArray.filter(char => (/[a-zA-Z]/).test(char)); 

    // Creating an array back into a string with punctuation removed to compare with the reversed string with punctuation removed
    let punctuationRemoved = splitArray;
    punctuationRemoved = punctuationRemoved.join("");

    let reverseArray = splitArray.reverse();
    let reversedString = reverseArray.join("");

    if (reversedString.toLowerCase() === punctuationRemoved.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

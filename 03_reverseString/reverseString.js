const reverseString = function(inputString) {

    let outputString = inputString.split();

    for (let i = 0; i < inputString.length; i++) {
        outputString[i] = inputString[(inputString.length - 1) - i];
    }

    outputString = outputString.join("");
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;

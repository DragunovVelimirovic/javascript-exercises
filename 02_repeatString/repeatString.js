const repeatString = function(inputWord, inputNum) {

    let outPutString = '';

    if (inputNum < 0) {
        return "ERROR";
    }

    for (let i = 0; i < inputNum; i++) {
        outPutString += inputWord;
    }
    
    return outPutString;

};

// Do not edit below this line
module.exports = repeatString;

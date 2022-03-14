const fibonacci = function(inputNum) {
    if (inputNum < 0) {
        return "OOPS";
    }
    
    let prevNum = 0;
    let currentNum = 1;

    for (let i = 0; i < inputNum; i++) {
        currentNum += prevNum;
        prevNum = currentNum - prevNum;
        
        // If it's only the first loop, reset prevNum to zero to signify there not being a previous number
        if (i === 0) {
            prevNum = 0;
        }
    }
    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;

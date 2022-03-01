const sumAll = function(inputOne, inputTwo) {

    let sum = 0;
    let smallerNum = inputOne;
    let largerNum = inputTwo;

    if (inputOne > inputTwo) {
        
        let swapHolder = smallerNum;
        smallerNum = largerNum;
        largerNum = swapHolder;

    }

    for (let nextNum = smallerNum; nextNum <= largerNum; nextNum++) {
        
        sum += nextNum;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

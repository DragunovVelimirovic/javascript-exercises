const leapYears = function(inputYear) {

    let yearCounter = 0;

    if (inputYear % 4 === 0){

        yearCounter ++;
    }
    
    if (inputYear % 100 === 0) {
        
        yearCounter --;
    }

    if (inputYear % 400 === 0) {
        
        yearCounter ++;
    }

    if (yearCounter >= 1) {
        
        return true;
    }
    else {

        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

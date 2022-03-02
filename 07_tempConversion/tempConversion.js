const ftoc = function(inputFahrenheit) {

    let outputCelsius = 0;

    outputCelsius = (inputFahrenheit - 32) * (5/9);
    return Math.round(outputCelsius * 10) /10;
};

const ctof = function(inputCelsius) {

    let outputFahrenheit = 0;

    outputFahrenheit = 1.8 * inputCelsius + 32;
    return Math.round(outputFahrenheit * 10) /10;  
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

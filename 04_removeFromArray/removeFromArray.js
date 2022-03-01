const removeFromArray = function(...args) {
    
    const argArray = args[0];
    let outputArray = [];
    
    argArray.forEach((item) => {

        if (!args.includes(item)) {
            outputArray.push(item);
        }
    });

    return outputArray;
};


// Do not edit below this line
module.exports = removeFromArray;

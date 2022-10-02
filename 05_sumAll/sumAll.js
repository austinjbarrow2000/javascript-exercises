const sumAll = function(num1, num2) {
    result = 0;
    if( num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') { 
        return 'ERROR';
    }

    if(num1 < num2) {
        small = num1;
        big = num2;
    } else {
        small = num2;
        big = num1;
    }

    for( let i = small; i <= big; i++ ) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;

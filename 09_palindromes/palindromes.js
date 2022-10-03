const palindromes = function (a) {
    a = a.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").toLowerCase().replace(/\s/g,"");
    b = a.split("");
    b = b.reverse();
    b = b.join("");

    return a == b;
};

// Do not edit below this line
module.exports = palindromes;
